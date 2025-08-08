import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';

import About from './pages/About';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import Training from './pages/Training';
import Internship from './pages/Internship';
import Contact from './pages/Contact';
import CustomNavbar from './Component/CustomNavbar';
import Workshop from './pages/Workshop';
import Career from './pages/Career';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomNavbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Workshop />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
