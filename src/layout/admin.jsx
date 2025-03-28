import { Routes, Route } from 'react-router-dom';
import Dashboard from "../Dashboard/Admin/Admin";
// import AddBlog from '../Dashboard/addBlog/addBlog';
import Event from "../Dashboard/Admin/Event";
import Message from "../Dashboard/Admin/message";
import Team from "../Dashboard/Admin/team";
import AddUser from '../Dashboard/addUser/adduser';
import Main from '../Dashboard/Main/Main';
import AddBlog from '../Dashboard/addBlog/addBlog';
import BlogPost from '../Dashboard/Admin/BlogPost';
import FileUploadForm from "../Dashboard/AddPost/AddpostBlog.jsx"

const Admin = () => {
    return (
        <Routes>
            <Route path="Admin" element={<Dashboard />} />
            <Route path="AddBlog" element={<AddBlog />} />
            <Route path="events" element={<Event />} />
            <Route path="message" element={<Message />} />
            <Route path="team" element={<Team />} />
            <Route path="Adduser" element={<AddUser />} />
            <Route path="BlogPost" element={<BlogPost />} />
            <Route path="add-post" element={<FileUploadForm />} />
            
        </Routes>
    );
};

export default Admin;
