import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  CircularProgress,
  Breadcrumbs,
  TextField,
  MenuItem,
  Slider,
} from '@mui/material';
import ProductCard from './ProductCard';

const Products = () => {
  const [sofas, setSofas] = useState([]);
  const [chairs, setChairs] = useState([]);
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([499, 7999]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

  useEffect(() => {
    if (!baseUrl) {
      console.error("REACT_APP_API_BASE_URL is not defined in .env file");
    }
  }, [baseUrl]);

  const fetchProducts = async () => {
    try {
      const [sofaResponse, chairsResponse] = await Promise.all([
        axios.get(`${baseUrl}/products/Sofa`),
        axios.get(`${baseUrl}/products/Chairs`)
      ]);
      
      setSofas(sofaResponse.data);
      setChairs(chairsResponse.data);
    } catch (err) {
      setError(`Error fetching products: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, [baseUrl]);

  const filteredProducts = [...sofas, ...chairs]
    .filter(product =>
      (category === 'All' || product.category === category) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => b.priority - a.priority); // Sort by priority (higher priority first)

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3, mb: 3, fontSize: '1rem', color: 'primary.main' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>

      <Typography variant="h4" textAlign="center">
        {category === 'All' ? 'Our Products' : `${category} Products`}
      </Typography>
      
      <Box display="flex" justifyContent="space-between" mb={3}>
        <TextField
          label="Category"
          select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Sofa">Sofas</MenuItem>
          <MenuItem value="Chairs">Chairs</MenuItem>
        </TextField>

        <Box>
          <Typography> Price: ${priceRange[0]} - ${priceRange[1]}</Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            min={499}
            max={11999}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>

      <Box display="flex" flexWrap="wrap">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Box>
    </Container>
  );
};

export default Products;
