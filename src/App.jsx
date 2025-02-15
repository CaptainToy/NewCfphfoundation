import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './layout/About';
import Home from './layout/home';
import Programs from "./layout/programs"
import Error from "./component/404error/error"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/about" element="*" />
      </Routes>
    </Router>
  );
}

export default App;
