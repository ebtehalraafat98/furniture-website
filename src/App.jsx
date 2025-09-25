import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ✅ المكونات الرئيسية
import NavBar from './Components/NavBar/NavBar.jsx';
import HeroSection from './Sections/HeroSection/HeroSection.jsx';
import Cards from './Components/Cards/Cards.jsx';
import About from './Pages/About/About';
import BlogPreview from './Sections/BlogPreview/BlogPreview.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ProductDetails from './Components/Cards/ProductDetails';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart'; // ✅ صفحة العربة

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/products" element={<Cards />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPreview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;