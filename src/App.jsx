import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './layout/About';
import Home from './layout/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
