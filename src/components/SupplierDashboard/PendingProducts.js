import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Modal,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  PaginationItem,
  Paper,
  Box
} from '@mui/material';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Styled Components
const PageContainer = styled('div')({
  backgroundColor: '#FBF6E2',
  minHeight: '100vh',
  padding: '20px',
});

const PageHeader = styled('h1')({
  color: '#131842',
  fontSize: '24px',
  fontWeight: '500',
  marginBottom: '20px',
});

const SearchContainer = styled('div')({
  display: 'flex',
  gap: '12px',
  marginBottom: '20px',
});

const SearchInput = styled(TextField)({
  flex: 1,
  backgroundColor: '#ECCEAE',
  width: '20%',
  borderRadius: '15px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ECCEAE',
    },
    '&:hover fieldset': {
      borderColor: '#E68369',
      borderRadius: '15px',
    },
  }
});

const FilterButton = styled(Button)({
  backgroundColor: '#FBF6E2',
  color: '#131842',
  borderColor: '#ECCEAE',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#ECCEAE',
    borderColor: '#E68369',
  }
});

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const StyledTableHead = styled(TableHead)({
  backgroundColor: '#131842',
  '& th': {
    color: 'white',
    fontWeight: '500',
    padding: '16px',
  }
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: '#ECCEAE',
  },
  '&:hover': {
    backgroundColor: '#E68369',
  }
});

const StyledTableCell = styled(TableCell)({
  padding: '12px 16px',
  color: '#131842',
});

const ActionButtonsCell = styled(TableCell)({
  padding: '8px 16px',
  display: 'flex',
  gap: '8px',
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FBF6E2',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  width: '90%',
  maxWidth: '500px',
};

const SupplierProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    type: '',
    weight: '',
    price: '',
    stock: '',
    description: '',
    imageUrls: []
  });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [openAddProductModal, setOpenAddProductModal] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setOpenAddProductModal(true); // Open modal
  };

  const handleCloseModal = () => {
    setOpenAddProductModal(false); // Close modal
  };

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/supplier/products/pending`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageUrls = [];
    const uploadPromises = Array.from(files).map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('products', 'products');

      return axios.post('https://api.cloudinary.com/v1_1/dpkjfa58b/image/upload', formData)
        .then(response => imageUrls.push(response.data.secure_url))
        .catch(err => console.error('Error uploading image:', err));
    });

    Promise.all(uploadPromises).then(() => {
      setUpdatedProduct({
        ...updatedProduct,
        imageUrls: [...updatedProduct.imageUrls, ...imageUrls]
      });
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      await axios.put(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/supplier/products/${updatedProduct._id}`,
        updatedProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Product updated successfully!');
      setShowModal(false);
      fetchProducts();
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      await axios.delete(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/supplier/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Product deleted successfully!');
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setShowImageModal(true);
  };

  // Filter products based on search and type
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All Types' || product.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Pagination logic
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (loading) return <div>Loading...</div>;

  return (
    <PageContainer>
      <PageHeader>Products Management</PageHeader>

      <SearchContainer>
        <SearchInput
          placeholder="Search products"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterButton
          variant="outlined"
          onClick={() => setSelectedType(selectedType === 'All Types' ? 'Food' : 'All Types')}
        >
          {selectedType}
        </FilterButton>

        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenModal}
            sx={{ backgroundColor: '#131842', color: '#FBF6E2', '&:hover': { backgroundColor: '#E68369' } }}
          >
            Add Product
          </Button>
        </Box> */}
      </SearchContainer>

      <StyledTableContainer component={Paper}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Images</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {currentProducts.map((product) => (
              <StyledTableRow key={product._id}>
                <StyledTableCell>{product.name}</StyledTableCell>
                <StyledTableCell>{product.type}</StyledTableCell>
                <StyledTableCell>{product.weight}</StyledTableCell>
                <StyledTableCell>{product.price}</StyledTableCell>
                <StyledTableCell>{product.stock}</StyledTableCell>
                <StyledTableCell>{product.description}</StyledTableCell>
                <StyledTableCell>
                  {product.imageUrls.length > 0 ? (
                    <img
                      src={product.imageUrls[0]}
                      alt={product.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      onClick={() => handleImageClick(product.imageUrls[0])}
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </StyledTableCell>
                <ActionButtonsCell>
                  <EditIcon onClick={() => {
                    setUpdatedProduct(product);
                    setShowModal(true);
                  }} />
                  <DeleteIcon onClick={() => handleDelete(product._id)} />
                </ActionButtonsCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <Pagination
    count={Math.ceil(filteredProducts.length / productsPerPage)}
    page={currentPage}
    onChange={handlePageChange}
    color="primary"
    sx={{
      '& .MuiPaginationItem-root': {
        backgroundColor: '#ECCEAE',
        color: '#131842',
      },
      '& .MuiPaginationItem-root.Mui-selected': {
        backgroundColor: '#E68369',
        color: '#FBF6E2',
      },
    }}
  />
</Box>

      {/* Modal for full-size image view */}
      <Modal
        open={showImageModal}
        onClose={() => setShowImageModal(false)}
      >
        <Box sx={modalStyle}>
          <img
            src={selectedImage}
            alt="Product"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
          />
        </Box>
      </Modal>

      {/* Modal for updating product */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Box sx={modalStyle}>
          <form onSubmit={handleUpdateSubmit}>
            <h2>Update Product</h2>
            <TextField
              label="Name"
              name="name"
              value={updatedProduct.name}
              onChange={handleUpdateChange}
              fullWidth
              required
            />
            <TextField
              label="Type"
              name="type"
              value={updatedProduct.type}
              onChange={handleUpdateChange}
              fullWidth
              required
            />
            <TextField
              label="Weight"
              name="weight"
              value={updatedProduct.weight}
              onChange={handleUpdateChange}
              fullWidth
              required
            />
            <TextField
              label="Price"
              name="price"
              value={updatedProduct.price}
              onChange={handleUpdateChange}
              fullWidth
              required
            />
            <TextField
              label="Stock"
              name="stock"
              value={updatedProduct.stock}
              onChange={handleUpdateChange}
              fullWidth
              required
            />
            <TextField
              label="Description"
              name="description"
              value={updatedProduct.description}
              onChange={handleUpdateChange}
              fullWidth
            />
            <input type="file" multiple onChange={handleImageChange} />
            <div>
              <Button type="submit">Update</Button>
              <Button onClick={() => setShowModal(false)}>Cancel</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </PageContainer>
  );
};

export default SupplierProducts;
