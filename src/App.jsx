import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import About from './layout/About';
import Home from './layout/home';
import Programs from "./layout/programs";
import Donation from './layout/donation';
import Blog from "./layout/Blog";
import Reviews from "./layout/Reviews";
import Contact from './layout/Contact';
import Error from './component/404error/error';
import ModelCard from './component/ModelCard/model';
import SignUp from './Dashboard/Authentication/Signin';
import Admin from "./layout/admin"; 
import Dashboard from './Dashboard/Admin/Admin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token && user.role === 'admin') {
      setIsAuthenticated(true);
      setUserRole(user.role);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Track user visits
  useEffect(() => {
    const visitCount = localStorage.getItem('visitCount');
    if (visitCount) {
      localStorage.setItem('visitCount', Number(visitCount) + 1);
    } else {
      localStorage.setItem('visitCount', 1);
    }
    console.log(`Total Visits: ${localStorage.getItem('visitCount')}`);
  }, []);

  if (isAuthenticated === null) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-lime-600"></div>; 
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/modelcard" element={<ModelCard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<Admin />} />
        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
