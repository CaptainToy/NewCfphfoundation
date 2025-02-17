import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
  );
}

export default App;