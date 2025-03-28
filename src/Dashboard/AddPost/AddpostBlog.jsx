import React, { useState } from "react";
import { db, storage, collection, addDoc, serverTimestamp, ref, uploadBytes, getDownloadURL } from "../../firebase.js";
import Swal from "sweetalert2";

const FileUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    file: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle text input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.file) {
        throw new Error("Please select an image to upload.");
      }

      // Upload image to Firebase Storage
      const storageRef = ref(storage, `uploads/${formData.file.name}`);
      await uploadBytes(storageRef, formData.file);
      const fileURL = await getDownloadURL(storageRef);

      // Save image URL to Firestore
      const docRef = await addDoc(collection(db, "images"), {
        title: formData.title,
        imageURL: fileURL,
        timestamp: serverTimestamp(),
      });

      console.log("Document written with ID:", docRef.id);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your image has been uploaded.",
      });

      // Reset form
      setFormData({ title: "", file: null });
    } catch (error) {
      console.error("Error uploading file:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white" style={{ border: "1px solid black", padding: "10px", borderRadius: "20px" }}>
        <form className="py-6 px-9" onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-5">
            <label htmlFor="title" className="mb-2 block text-xl font-semibold text-[#07074D]">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description Textarea */}
          <div className="mb-5">
            <label htmlFor="description" className="mb-2 block text-xl font-semibold text-[#07074D]">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Write Something"
              rows="4"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* File Upload */}
          <div className="mb-6 pt-4">
            <label className="mb-2 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>
            <div className="mb-8">
              <input type="file" name="file" id="file" className="sr-only" onChange={handleFileChange} />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">Drop files here</span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">Browse</span>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Posting..." : "Send File"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploadForm;
