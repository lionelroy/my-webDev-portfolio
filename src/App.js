import React, { useState, useEffect  } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Resume from './pages/Resume';




function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ScrollToTop />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/home' exact element={<Home/>} />
        <Route path='/projects' exact element={<Projects/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/resume' exact element={<Resume/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
