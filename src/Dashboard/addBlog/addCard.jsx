import React, { useState } from "react";

const ImageUploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (!title || !description || !file) {
        alert("All fields are required!");
        return;
      }
  
      setLoading(true);
  
      try {
        // Upload image to Appwrite Storage
        const uploadedFile = await storage.createFile("YOUR_BUCKET_ID", "unique()", file);
        const imageId = uploadedFile.$id;
  
        // Save blog data in Appwrite Database
        await databases.createDocument("YOUR_DATABASE_ID", "YOUR_COLLECTION_ID", "unique()", {
          title,
          description,
          imageId,
        });
  
        alert("Blog uploaded successfully!");
        setTitle("");
        setDescription("");
        setFile(null);
      } catch (error) {
        console.error(error);
        alert("Error uploading blog");
      } finally {
        setLoading(false);
      }
    };
  

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Upload an Image</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Image:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};
}
export default ImageUploadForm;