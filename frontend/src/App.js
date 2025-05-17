import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated to Routes
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail'; // Assuming you have this component

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes> {/* Updated to Routes */}
          <Route path="/" element={<Home />} /> {/* Updated to use element */}
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetail />} /> {/* Product detail route */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
