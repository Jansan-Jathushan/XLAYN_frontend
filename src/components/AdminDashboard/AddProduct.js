

import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  TextField, Button, Box, Typography, Paper, Input,
  Snackbar, CircularProgress, Dialog, DialogContent, DialogTitle
} from '@mui/material';
import { styled } from '@mui/system';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Styled components for modern UI
const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBF6E2',
  padding: theme.spacing(5),
  borderRadius: theme.spacing(4),
  maxWidth: 600,
  margin: 'auto',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',  // Center content horizontally
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#131842',
  color: '#FBF6E2',
  padding: theme.spacing(2),
  fontWeight: 'bold',
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#E68369',
  },
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: '#ECCEAE',
  borderBlockColor: '#131842',
  borderRadius: theme.shape.borderRadius,
}));

const AddProduct = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [images, setImages] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const onSubmit = async (data) => {
    setLoading(true); // Show loading state while sending request

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    for (let i = 0; i < images.length; i++) {
      formData.append('imageUrls', images[i]);
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/add-products`,
        formData,
        {
          headers: {
            'Content-Type': `multipart/form-data`,
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      setStatusMessage('Product added successfully: ${response.data.name}');
      setStatusType('success');
      setOpenSnackbar(true);
    } catch (err) {
      console.error('Error adding product:', err);
      setStatusMessage('Error adding product: ${err.response?.data?.message || err.message}');
      setStatusType('error');
      setOpenSnackbar(true);
    } finally {
      setLoading(false); // Hide loading state after request completion
    }
  };

  return (
    <StyledContainer elevation={3}>
      <Typography variant="h5" sx={{ color: '#131842', mb: 2, fontWeight: 'bold' }}>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="Product Name"
          {...register('name', { required: 'Product name is required' })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          variant="outlined"
        />
        <StyledInput
          label="Product Type"
          {...register('type', { required: 'Product type is required' })}
          error={!!errors.type}
          helperText={errors.type?.message}
          fullWidth
          variant="outlined"
        />
        <StyledInput
          label="Weight (e.g., 50kg)"
          {...register('weight', { required: 'Weight is required' })}
          error={!!errors.weight}
          helperText={errors.weight?.message}
          fullWidth
          variant="outlined"
        />
        <StyledInput
          label="Price"
          type="number"
          {...register('price', { required: 'Price is required' })}
          error={!!errors.price}
          helperText={errors.price?.message}
          fullWidth
          variant="outlined"
        />
        <StyledInput
          label="Stock"
          type="number"
          {...register('stock', { required: 'Stock is required' })}
          error={!!errors.stock}
          helperText={errors.stock?.message}
          fullWidth
          variant="outlined"
        />
        <StyledInput
          label="Description"
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description?.message}
          fullWidth
          multiline
          rows={3}
          variant="outlined"
        />
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          required
          sx={{
            display: 'block',
            mt: 2,
            mb: 3,
            color: '#131842',
          }}
        />
        <StyledButton type="submit" variant="contained" fullWidth disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Add Product'}
        </StyledButton>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {statusType === 'success' ? (
              <FaCheckCircle style={{ color: '#4caf50', marginRight: 8 }} />
            ) : (
              <FaExclamationCircle style={{ color: '#f44336', marginRight: 8 }} />
            )}
            {statusMessage}
          </Box>
        }
      />
    </StyledContainer>
  );
};

// Parent component to center AddProduct in the viewport
const AddProductPage = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose} >
  {/* <DialogContent> */}
    <AddProduct onClose={onClose} />
  {/* </DialogContent> */}
</Dialog>
);


export default AddProductPage;

