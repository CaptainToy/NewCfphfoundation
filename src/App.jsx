import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Dashboard from "./Dashboard/Admin/Admin"
// import AddBlog from './Dashboard/addBlog/addBlog';
// import Events from './Dashboard/Admin/Event';
// import Message from './Dashboard/Admin/message';
// import Team from "./Dashboard/Admin/team"
function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
      localStorage.setItem('hasSeenModal', 'true');
    }
  }, []);

  return (
    <Router>
      {/* Modal Overlay */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ModelCard />
            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ModelCard" element={<ModelCard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/Add-Blog" element={<AddBlog />} /> */}
        {/* <Route path="/Events" element={<Events />} /> */}
        {/* <Route path="/Message" element={<Message />} /> */}
        {/* <Route path="/Team" element={<Team />} /> */}
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
  );
}

export default App;
