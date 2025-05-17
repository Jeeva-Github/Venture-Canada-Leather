import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  Button,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Twitter,
  Instagram,
  Facebook,
} from '@mui/icons-material';

const About = () => {
  return (
    
    <Container sx={{ mt: 5, bgcolor: '#f9f9f9', p: 3, borderRadius: 1 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3, fontSize: '1rem', color: 'primary.main' }}>
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
  <Typography color="text.primary">About</Typography>
</Breadcrumbs>

      <Box className="about-header text-center mb-5">
        <Typography variant="h4">About Venture Canada Leather</Typography>
        <Typography variant="h6" sx={{ fontWeight: 'normal' }}>
          Providing top-quality leather products since 1988.
        </Typography>
      </Box>

      <Box className="about-content">
        <Typography variant="h5" sx={{ mb: 2 }}>Who We Are</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Venture Canada Leather Inc. is a family-run business based in Kitchener, Ontario. Since 1988, we have supplied Canadian-made custom leather products to major retailers and the automotive industry.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Today, we specialize in high-quality leather furniture, offering a wide range of products retailed across North America.
        </Typography>

        <hr className="my-4" />

        <Box className="about-section">
          <Typography variant="h5" sx={{ mb: 2 }}>Contact Us</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Email sx={{ mr: 1 }} />
            <a href="mailto:surajit.biswas@venturecanadaleather.ca" style={{ textDecoration: 'none', color: 'inherit' }}>
              surajit.biswas@venturecanadaleather.ca
            </a>
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            <Phone sx={{ mr: 1 }} />
            <a href="tel:+15195723543" style={{ textDecoration: 'none', color: 'inherit' }}>
              +1 (519) 572-3543
            </a>
          </Typography>
        </Box>

        <hr className="my-4" />

        <Box className="about-section">
          <Typography variant="h5" sx={{ mb: 2 }}>Store Locator</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOn sx={{ mr: 1 }} />
            Address: P.O. Box 994, 224 Madison Avenue S, Kitchener, Ontario, Canada, N2G 4E3
          </Typography>
          <Box sx={{ mt: 2, position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '56.25%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.6349777721803!2d-80.48846419851645!3d43.44065010719927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4e529650611%3A0xa06f0b6cfcc8a913!2sVenture%20Canada%20Inc!5e0!3m2!1sen!2sca!4v1727202004944!5m2!1sen!2sca"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allowFullScreen
              title="Store Location"
            />
          </Box>
        </Box>

        <hr className="my-4" />

        <Box className="about-section">
          <Typography variant="h5" sx={{ mb: 2 }}>Follow Us on Social Media</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>

          <Button
              variant="outlined"
              startIcon={<Facebook />}
              sx={{ color: '#4267B2', borderColor: '#4267B2' }} // Facebook color
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<Twitter />}
              sx={{ color: '#1DA1F2', borderColor: '#1DA1F2' }} // Twitter color
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Button>
            <Button
              variant="outlined"
              startIcon={<Instagram />}
              sx={{ color: '#C13584', borderColor: '#C13584' }} // Instagram color
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
          </Box>
        </Box>

      </Box>
    </Container>
  );
};

export default About;
