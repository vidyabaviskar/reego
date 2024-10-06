import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import GetQuote from './components/GetQuote';
import Contact from './components/Contact';
import MoreProducts from './components/MoreProducts';
import ProductDetails from './components/ProductDetails';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Cart from './components/Cart';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import PrivateRoute from './components/PrivateRoute';
import ChairPage from './pages/ChairPage'; 
import TablePage from './pages/TablePage'; 
import TableChairSetPage from './pages/TableChairSetPage'; 
import TepoysPage from './pages/TepoysPage';
import StoolsPage from './pages/StoolsPage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <Container fluid className="main-content">
                
                <Home />
                <About />
                <Gallery />
                <Product />
                <Testimonial />
                <GetQuote />
                <Contact />
              </Container>
            }
          />
          
          <Route
            path="/reego-final"
            element={
              <Container fluid className="main-content">
                
                <Home />
                <About />
                <Product />
                <Testimonial />
                <GetQuote />
                <Contact />
              </Container>
            }
          />
          
          <Route path="/gallery" element={<Gallery />} />

          {/* MoreProducts Route */}
          <Route path="/moreproducts" element={<MoreProducts />} />
          
          {/* Product Details Route */}
          <Route path="/product/:id" element={<ProductDetails />} />
          
          {/* Cart and Login Routes */}
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/login" element={<Login />} />
          
          {/* Admin Panel with PrivateRoute */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />

          {/* Category Routes */}
          <Route path="/category/chair" element={<ChairPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/table" element={<TablePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/table-chair-set" element={<TableChairSetPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/tepoys" element={<TepoysPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/stools" element={<StoolsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
