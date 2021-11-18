import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown'
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';


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
      <Hero />
    </>
  );
}

export default App;
