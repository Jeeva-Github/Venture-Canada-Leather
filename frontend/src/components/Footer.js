import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#333', p: 2, mt: 5 }}> {/* Reduced padding */}
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" color="white" align="center" sx={{ mb: 1, fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Venture Canada Inc. All rights reserved.
          </Typography>
        <Typography variant="body2" color="white" align="center" sx={{ mb: 2 }}>
          Proudly Made in Canada. Since 1988.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton color="inherit" href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <Facebook sx={{ color: 'white', fontSize: '1.5rem' }} /> {/* Increased icon size */}
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com" target="_blank" aria-label="Twitter">
            <Twitter sx={{ color: 'white', fontSize: '1.5rem' }} />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <Instagram sx={{ color: 'white', fontSize: '1.5rem' }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
