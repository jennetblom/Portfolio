
import './App.css'
import Layout from './components/Layout/Layout.jsx';

import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';

import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';
import About from './pages/About/About.jsx';
import Resume from './pages/Resume/Resume.jsx';
function App() {


  return (

    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </div>

  )
}

export default App
