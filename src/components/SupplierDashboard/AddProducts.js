import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { TextField, Button, CircularProgress, Snackbar } from '@mui/material';

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
    // Append all form fields to FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // Append selected images to FormData
    for (let i = 0; i < images.length; i++) {
      formData.append('imageUrls', images[i]);
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token not found.');
      }

      // Make POST request to add product
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/supplier/add-products`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLoading(false);
      setStatusMessage('Product added successfully!');
      setStatusType('success');
      setOpenSnackbar(true);

      // If onClose is passed, call it to close the form/modal
      if (onClose) onClose();
    } catch (err) {
      setLoading(false);
      setStatusMessage(err.response?.data?.message || 'Error adding product.');
      setStatusType('error');
      setOpenSnackbar(true);
      console.error('Error adding product:', err.response || err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" style={styles.form}>
          <TextField
            label="Product Name"
            name="name"
            {...register('name', { required: 'Product name is required' })}
            fullWidth
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name.message}</span>}

          <TextField
            label="Fish Type"
            name="type"
            {...register('type', { required: 'Fish type is required' })}
            fullWidth
            style={styles.input}
          />
          {errors.type && <span style={styles.error}>{errors.type.message}</span>}

          <TextField
            label="Weight/Size"
            name="weight"
            {...register('weight', { required: 'Weight is required' })}
            fullWidth
            style={styles.input}
          />
          {errors.weight && <span style={styles.error}>{errors.weight.message}</span>}

          <TextField
            label="Price"
            name="price"
            {...register('price', { required: 'Price is required' })}
            fullWidth
            style={styles.input}
            type="number"
          />
          {errors.price && <span style={styles.error}>{errors.price.message}</span>}

          <TextField
            label="Stock"
            name="stock"
            {...register('stock', { required: 'Stock quantity is required' })}
            fullWidth
            style={styles.input}
            type="number"
          />
          {errors.stock && <span style={styles.error}>{errors.stock.message}</span>}

          <TextField
            label="Description"
            name="description"
            {...register('description', { required: 'Description is required' })}
            fullWidth
            style={styles.input}
          />
          {errors.description && <span style={styles.error}>{errors.description.message}</span>}

          <input
            type="file"
            multiple
            onChange={handleFileChange}
            style={styles.fileInput}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={styles.button}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Add Product'}
          </Button>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message={statusMessage}
          severity={statusType}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FBF6E2',
  },
  formContainer: {
    width: '80%',
    maxWidth: '2000px',
    height: '97`px',
    padding: '20px',
    backgroundColor: '#ECCEAE',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'left',
    color: '#131842',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '55px',
    backgroundColor: '#FBF6E2',
    borderRadius: '5px',
    border: '1px solid #131842',
  },
  button: {
    backgroundColor: '#131842',
    color: '#fff',
    padding: '20px',
    marginBottom: '30px',
  },
  fileInput: {
    marginBottom: '45px',
    backgroundColor: '#FBF6E2',
    borderRadius: '5px',
    padding: '15px',
    border: '1px solid #131842',
  },
};

export default AddProduct;
