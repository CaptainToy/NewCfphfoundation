import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "../Dashboard/Admin/Admin";
import AddBlog from '../Dashboard/addBlog/addBlog';
import Event from "../Dashboard/Admin/Event";
import Message from "../Dashboard/Admin/message";
import Team from "../Dashboard/Admin/team";

const Admin = ({ isAuthenticated, userRole }) => {
    if (!isAuthenticated || userRole !== 'admin') {
        return <Navigate to="/signup" />;
    }

    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/events" element={<Event />} />
            <Route path="/message" element={<Message />} />
            <Route path="/team" element={<Team />} />
        </Routes>
    );
};

export default Admin;
