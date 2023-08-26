import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './elements/home';
import About from './elements/about';
import Project from './elements/project';
import Contact from './elements/contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
