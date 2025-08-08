import React from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import Training from './pages/Training';
import Internship from './pages/Internship';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/" element={<Home />} />
         
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/internship" element={<Internship />} />
           <Route path="/contact" element={<Contact />} />
         
         
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
