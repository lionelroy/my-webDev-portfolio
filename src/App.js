import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Projects from './pages/Projects';
// import About from './pages/About';
// import Contact from './pages/Contact';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/home' exact element={<Home/>} />
        <Route path='/projects' exact element={<Projects/>} />
        {/* <Route path='/about' exact element={<About/>} />
        <Route path='/contact' exact element={<Contact/>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
