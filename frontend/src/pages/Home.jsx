import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import sofaImage from '../assets/images/sofa.webp'; // Placeholder for your sofa image
import './Home.css'; // Importing external CSS

const Home = () => {
  const customOptions = [
    { icon: "bi bi-palette-fill", title: "300+ Types of Leather", desc: "Select from premium leather types for your custom sofa." },
    { icon: "bi bi-brush-fill", title: "1000+ Colors", desc: "Choose from a wide range of colors to match your style." },
    { icon: "bi bi-arrows-fullscreen", title: "Custom Dimensions", desc: "Customize your sofa's length, height, and width for a perfect fit." },
    { icon: "bi bi-square-fill", title: "Custom Leg Color", desc: "Personalize the leg color for a unique finish." },
    { icon: "bi bi-couch-fill", title: "Seating Foam: Hard or Soft", desc: "Choose the seating foam firmness that suits your comfort." },
    { icon: "bi bi-cushion-fill", title: "Cushion Firmness", desc: "Select cushion firmness for a relaxing experience." }
  ];

  const features = [
    { title: "Quality Craftsmanship", desc: "Every sofa is crafted with the finest materials and meticulous attention to detail." },
    { title: "Customizable Options", desc: "Choose from a wide range of leathers, colors, and sizes to fit your style." },
    { title: "Exceptional Comfort", desc: "Our sofas are designed for ultimate comfort and durability, ensuring long-lasting satisfaction." }
  ];

  return (
    <Container maxWidth="lg" className="home-container">
      {/* Hero Section */}
      <header className="hero-section text-center">
        <Typography variant="h4" className="hero-title">Welcome to Venture Canada Leather</Typography>
        <Typography variant="subtitle1" className="hero-subtitle">
          Your one-stop destination for premium leather sofas crafted with precision and care.
        </Typography>
        <img src={sofaImage} alt="Modern Sofa" className="hero-image" />
        <Box className="cta-buttons" display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="primary" className="cta-button" href="/products">
            Shop Now
          </Button>
          <Button variant="outlined" color="secondary" className="cta-button" href="/about">
            Learn More
          </Button>
        </Box>

      </header>

      {/* Custom Made Sofa Section */}
      <section className="custom-sofa-section text-center mt-5">
        <Typography variant="h5" className="section-title">Custom Made Sofa</Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" className="custom-options">
          {customOptions.map((option, index) => (
            <Box key={index} p={2} flex="1 0 30%" m={1} className="option-card">
              <i className={option.icon + " icon-large"}></i>
              <Typography variant="h6" className="option-title">{option.title}</Typography>
              <Typography className="option-desc">{option.desc}</Typography>
            </Box>
          ))}
        </Box>
        <Button variant="contained" color="primary" className="mt-4" href="/products">Explore Customization</Button>
      </section>

      {/* Features Section */}
      <section className="features-section text-center mt-5">
        <Typography variant="h5" className="section-title">Why Choose Us?</Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {features.map((feature, index) => (
            <Box key={index} p={2} flex="1 0 30%" m={1} className="feature-card">
              <Typography variant="h6">{feature.title}</Typography>
              <Typography>{feature.desc}</Typography>
            </Box>
          ))}
        </Box>
      </section>
    </Container>
  );
};

export default Home;
