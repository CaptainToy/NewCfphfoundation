import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import AddCard from "./addCard.jsx"; 

const AddBlog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments("YOUR_DATABASE_ID", "YOUR_COLLECTION_ID");
        setBlogs(response.documents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const sampleOrders = [
    { name: "John Doe", date: "01-10-2021" },
    { name: "Jane Smith", date: "02-10-2021" },
    { name: "Mark Wilson", date: "03-10-2021" },
    { name: "Emily Johnson", date: "04-10-2021" },
    { name: "Michael Brown", date: "05-10-2021" }
  ];

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li><a href="#" role="button">Dashboard</a></li>
            <li><i className="bx bx-chevron-right"></i></li>
            <li><a className="active" href="#" role="button">Home</a></li>
          </ul>
        </div>
      </div>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Blogs</h3>
            <i className="bx bx-plus cursor-pointer text-xl" onClick={() => setIsModalOpen(true)}></i>
            <i className="bx bx-filter text-xl"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Blog img</th>
                <th>Blog Date</th>
              </tr>
            </thead>
            <tbody>
              {sampleOrders.map((order, index) => (
                <tr key={index}>
                  <td className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/50" alt="User" className="w-10 h-10 rounded-full" />
                    <p>{order.name}</p>
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AddBlog;
