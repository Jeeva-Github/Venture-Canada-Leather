import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import LazyLoad from 'react-lazyload'; // Import LazyLoad

const ProductCard = ({ product }) => {
  return (
    <LazyLoad height={400} offset={100}>
      <Box width="100%" maxWidth="350px" margin="16px" flexGrow={1}>
        <Card
          elevation={3}
          sx={{
            transition: '0.3s',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: 6,
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={product.imageUrl || 'fallback-image-url.jpg'} // Fallback image
            alt={product.name}
            sx={{
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0',
            }}
            loading="lazy" // Lazy load image
          />
          <CardContent>
            <Typography variant="h6" component="h2" noWrap>{product.name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, }} noWrap>
              {product.description}
            </Typography>

            <Typography variant="h6" color="primary">Price: ${product.price}</Typography>
            <Box mt={2}>
              <Button
                component={Link}
                to={`/products/${product._id}`}
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgb(139, 0, 0)',
                  },
                }}
              >
                View Details
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </LazyLoad>
  );
};

export default ProductCard;
