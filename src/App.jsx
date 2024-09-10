import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsCollection from './pages/ProductsCollection';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import ModelsManagement from './pages/ModelsManagement';
import Model from './pages/Model';
import ModelItem from './components/ModelItem';
import HomePage from './pages/HomePage'; // Import HomePage component
import About from './pages/About'; // Import About component
import Cart from './pages/Cart'; // Import Cart component
import Login from './pages/Login'; // Import Login component
import PlaceOrder from './pages/PlaceOrder'; // Import PlaceOrder component
import FashionEvents from './pages/FashionEvents'; // Import FashionEvents component
import ExclusiveMembership from './pages/ExclusiveMembership'; // Import ExclusiveMembership component
import ProductItem from './components/ProductItem';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar /> {/*va a estar disponible en todas las páginas pq se crea afuera de Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<ProductsCollection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection/:productID" element={<ProductsCollection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/models" element={<ModelsManagement />} />
        <Route path="/events" element={<FashionEvents />} />
        <Route path="/membership" element={<ExclusiveMembership />} />
        <Route path="/product/:id" element={<ProductItem />} />

      </Routes>
      <Footer />  
    </div>
  );
};

export default App;