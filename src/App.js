import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/index';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?key=7848907-e6b3214f8ca532503c2b66514&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route
          path='/'
          element={
            <Home images={images} isLoading={isLoading} setTerm={setTerm} />
          }
        />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/*'
          element={
            <div>
              <h1 className='center-content my-20 text-5xl h-screen'>404</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
