import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/system';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
  Skeleton,
  useMediaQuery,
  Fab,
  Container,
  Breadcrumbs
} from '@mui/material';
import { Facebook, WhatsApp, Twitter, Instagram, Share } from '@mui/icons-material';

// Styled components for layout and visuals
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'fix',
  top: theme.spacing(10),
  width: '100%',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

// Fixed CTA Button for Mobile
const FixedCTAButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  background: theme.palette.primary.main,
  color: '#fff',
}));

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMobile = useMediaQuery('(max-width:600px)');

  // The base URL for the API call (use env variable for production URL)
  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

  // Fetch product details when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products/id/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, baseUrl]);

  // Return loading skeleton if data is still being fetched
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Box>
          <Skeleton variant="rectangular" width={600} height={400} />
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </Box>
      </Box>
    );
  }

  // Show error message if there was an issue fetching the data
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  // Render product details once data is loaded
  return (
    <Container sx={{ p: 2, bgcolor: 'background.default' }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2, fontSize: '1rem', color: 'primary.main', mt: 2 }}>
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    Home
  </Link>
  <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
    Products
  </Link>
  <Typography color="text.primary">{product.name}</Typography>
</Breadcrumbs>

      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Reverted to Old Image Style */}
        <ImageContainer>
          <img
            src={product.imageUrl || 'placeholder-image.jpg'}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              transition: 'transform 0.5s ease',
              cursor: 'zoom-in',
            }}
          />
        </ImageContainer>

        <StyledCard sx={{ flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom>{product.name}</Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>{product.category}</Typography>

            <Typography variant="h6" fontWeight="bold" gutterBottom>Description:</Typography>
            <Typography variant="body2" gutterBottom>
              {product.description.split('\n').map((line, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                  {line}
                </Typography>
              ))}
            </Typography>

            <Typography variant="h6" fontWeight="bold">Customize:</Typography>
            <Typography variant="body1">You can Choose your own:</Typography>
            <ul>
              <li>Seating Foam - Hard/Soft</li>
              <li>Dimensions: Height, Width, and Depth</li>
              <li>Leather types & colors</li>
              <li>Leg Color</li>
              <li>Seating firmness</li>
            </ul>

            <Typography variant="h6" fontWeight="bold" gutterBottom>Dimensions:</Typography>
            <TableContainer component={Paper} sx={{ mb: 2, maxWidth: 300, borderRadius: 2 }}>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell><strong>Length</strong></TableCell>
                    <TableCell>{product.dimensions.length}"</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Width</strong></TableCell>
                    <TableCell>{product.dimensions.width}"</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Height</strong></TableCell>
                    <TableCell>{product.dimensions.height}"</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" gutterBottom><strong>Price:</strong> ${product.price}</Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Last Updated:</strong> {new Date(product.updatedAt).toLocaleDateString()}
            </Typography>

            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ borderRadius: '50px' }}
                href={`mailto:surajit.biswas@venturecanadaleather.ca?subject=Order%20${product.name}`}
              >
                Place Order / Ask more info
              </Button>

              <Box mt={2} display="flex" justifyContent="center" gap={2}>
                <IconButton
                  aria-label="Share on Facebook"
                  color="info"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  aria-label="Share on WhatsApp"
                  color="info"
                  href={`https://wa.me/?text=Check%20this%20out:%20${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                >
                  <WhatsApp />
                </IconButton>
                <IconButton
                  aria-label="Share on Twitter"
                  color="info"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  aria-label="Share on Instagram"
                  color="error"
                  href={`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  aria-label="Copy link"
                  color="inherit"
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                >
                  <Share />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Box>

      {isMobile && (
        <FixedCTAButton variant="extended" href={`mailto:surajit.biswas@venturecanadaleather.ca?subject=Order%20${product.name}`}>
          Place Order / Ask more info
        </FixedCTAButton>
      )}
    </Container>
  );
};

export default ProductDetail;
