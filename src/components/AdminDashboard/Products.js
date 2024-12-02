// 'use client'

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import Table from 'react-bootstrap/Table'
// import Container from 'react-bootstrap/Container'

// export default function AdminProducts() {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [showModal, setShowModal] = useState(false)
//   const [showImageModal, setShowImageModal] = useState(false)
//   const [selectedImage, setSelectedImage] = useState('')
//   const [updatedProduct, setUpdatedProduct] = useState({
//     name: '',
//     type: '',
//     weight: '',
//     price: '',
//     stock: '',
//     description: '',
//     imageUrls: []
//   })

//   const fetchProducts = async () => {
//     try {
//       const token = localStorage.getItem('token')
//       if (!token) {
//         console.error('No token found')
//         return
//       }

//       const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/get-products', {
//         headers: {
//           Authorization: 'Bearer ${token}',
//         },
//       })
//       setProducts(response.data)
//     } catch (err) {
//       console.error('Error fetching products:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const fetchProductDetails = async (id) => {
//     try {
//       const token = localStorage.getItem('token')
//       if (!token) {
//         console.error('No token found')
//         return
//       }

//       const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/get-products/${id}', {
//         headers: {
//           Authorization: 'Bearer ${token}',
//         },
//       })
//       setUpdatedProduct(response.data)
//       setShowModal(true)
//     } catch (err) {
//       console.error('Error fetching product details:', err)
//     }
//   }

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const handleUpdateChange = (e) => {
//     const { name, value } = e.target
//     setUpdatedProduct({
//       ...updatedProduct,
//       [name]: value
//     })
//   }

//   const handleImageChange = (e) => {
//     const files = e.target.files
//     const imageUrls = []
//     const uploadPromises = Array.from(files).map(file => {
//       const formData = new FormData()
//       formData.append('file', file)
//       formData.append('products', 'products')

//       return axios.post('https://api.cloudinary.com/v1_1/dpkjfa58b/image/upload', formData)
//         .then(response => imageUrls.push(response.data.secure_url))
//         .catch(err => console.error('Error uploading image:', err))
//     })

//     Promise.all(uploadPromises).then(() => {
//       setUpdatedProduct({
//         ...updatedProduct,
//         imageUrls: [...updatedProduct.imageUrls, ...imageUrls]
//       })
//     })
//   }

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const token = localStorage.getItem('token')
//       if (!token) {
//         console.error('No token found')
//         return
//       }

//       await axios.put(
//         '${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/products/${updatedProduct._id}',
//         updatedProduct,
//         {
//           headers: {
//             Authorization: 'Bearer ${token}',
//           },
//         }
//       )
//       alert('Product updated successfully!')
//       setShowModal(false)
//       fetchProducts()
//     } catch (err) {
//       console.error('Error updating product:', err)
//     }
//   }

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem('token')
//       if (!token) {
//         console.error('No token found')
//         return
//       }

//       await axios.delete('${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/products/${id}', {
//         headers: {
//           Authorization: 'Bearer ${token}',
//         },
//       })
//       alert('Product deleted successfully!')
//       fetchProducts()
//     } catch (err) {
//       console.error('Error deleting product:', err)
//     }
//   }

//   const handleImageClick = (url) => {
//     setSelectedImage(url)
//     setShowImageModal(true)
//   }

//   if (loading) return <div>Loading...</div>

//   return (
//     <Container className="py-4">
//       <h2 className="h2 mb-4">Admin Products</h2>

//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Product Name</th>
//             <th>Type</th>
//             <th>Weight</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Description</th>
//             <th>Images</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>{product.type}</td>
//               <td>{product.weight}</td>
//               <td>{product.price}</td>
//               <td>{product.stock}</td>
//               <td>{product.description}</td>
//               <td>
//                 {product.imageUrls?.map((url, index) => (
//                   <img 
//                     key={index} 
//                     src={url} 
//                     alt={'Product image ${index}'} 
//                     className="img-thumbnail me-2 cursor-pointer" 
//                     style={{ width: '48px', height: '48px', objectFit: 'cover', cursor: 'pointer' }}
//                     onClick={() => handleImageClick(url)}
//                   />
//                 ))}
//               </td>
//               <td>
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => fetchProductDetails(product._id)}
//                   className="me-2"
//                 >
//                   Update
//                 </Button>
//                 <Button 
//                   variant="outline-danger" 
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Update Product Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Update Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleUpdateSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={updatedProduct.name}
//                 onChange={handleUpdateChange}
//                 placeholder="Enter product name"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Product Type</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="type"
//                 value={updatedProduct.type}
//                 onChange={handleUpdateChange}
//                 placeholder="Enter product type"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Weight</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="weight"
//                 value={updatedProduct.weight}
//                 onChange={handleUpdateChange}
//                 placeholder="Enter product weight"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="price"
//                 value={updatedProduct.price}
//                 onChange={handleUpdateChange}
//                 placeholder="Enter product price"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Stock</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="stock"
//                 value={updatedProduct.stock}
//                 onChange={handleUpdateChange}
//                 placeholder="Enter stock quantity"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 name="description"
//                 value={updatedProduct.description}
//                 onChange={handleUpdateChange}
//                 placeholder="Enter product description"
//                 rows={3}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Product Images</Form.Label>
//               <Form.Control
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImageChange}
//               />
//             </Form.Group>
//             <div className="d-flex flex-wrap gap-2 mb-3">
//               {updatedProduct.imageUrls.map((url, index) => (
//                 <img 
//                   key={index} 
//                   src={url} 
//                   alt={'Product image ${index}'} 
//                   className="img-thumbnail"
//                   style={{ width: '64px', height: '64px', objectFit: 'cover', cursor: 'pointer' }}
//                   onClick={() => handleImageClick(url)}
//                 />
//               ))}
//             </div>
//             <Button type="submit" variant="primary">Update Product</Button>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       {/* Image Preview Modal */}
//       <Modal show={showImageModal} onHide={() => setShowImageModal(false)} centered size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-center">
//           <img 
//             src={selectedImage} 
//             alt="Product preview" 
//             style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
//           />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   )
// }


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
import AddProduct from './AddProduct.js';

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

const AdminProducts = () => {
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

      const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/get-products`, {
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
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/products/${updatedProduct._id}`,
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

      await axios.delete(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/admin/products/${id}`, {
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

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          sx={{ backgroundColor: '#131842', color: '#FBF6E2', '&:hover': { backgroundColor: '#E68369' } }}
        >
          Add Product
        </Button>
      </Box>

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
                  {product.imageUrls.slice(0, 3).map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={'product-img-${idx}'}
                      width="50"
                      height="50"
                      onClick={() => handleImageClick(image)}
                      style={{ cursor: 'pointer', margin: '0 5px' }}
                    />
                  ))}
                </StyledTableCell>
                <ActionButtonsCell>
                  <Button
                    color="#131842"
                    onClick={() => {
                      setUpdatedProduct(product);
                      setShowModal(true);
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    color="#131842"
                    onClick={() => handleDelete(product._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </ActionButtonsCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      <Pagination
        count={Math.ceil(filteredProducts.length / productsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        siblingCount={1}
        boundaryCount={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            style={{ backgroundColor: '#E68369', color: '#131842' }}
          />
        )}
      />

      {/* Modal for updating product */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div style={modalStyle}>
          <h2 style={{ color: '#131842' }}>Update Product</h2>
          <form onSubmit={handleUpdateSubmit}>
            <TextField
              label="Product Name"
              name="name"
              value={updatedProduct.name}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: '#ECCEAE' }}
            />
            <TextField
              label="Type"
              name="type"
              value={updatedProduct.type}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: '#ECCEAE' }}
            />
            <TextField
              label="Weight"
              name="weight"
              value={updatedProduct.weight}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: '#ECCEAE' }}
            />
            <TextField
              label="Price"
              name="price"
              value={updatedProduct.price}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: '#ECCEAE' }}
            />
            <TextField
              label="Stock"
              name="stock"
              value={updatedProduct.stock}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: '#ECCEAE' }}
            />
            <TextField
              label="Description"
              name="description"
              value={updatedProduct.description}
              onChange={handleUpdateChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: '#ECCEAE' }}
            />
            <TextField
              type="file"
              inputProps={{ multiple: true }}
              onChange={handleImageChange}
              fullWidth
              margin="normal"
              variant="outlined"
              style={{
                backgroundColor: '#ECCEAE',
                
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              margin="normal"
              style={{ backgroundColor: '#131842' }}
            >
              Update Product
            </Button>
          </form>
        </div>
      </Modal>

      {/* Modal for image preview */}
      <Modal open={showImageModal} onClose={() => setShowImageModal(false)}>
        <div style={modalStyle}>
          <img src={selectedImage} alt="Product Preview" style={{ width: '100%' }} />
        </div>
      </Modal>
      <AddProduct open={openAddProductModal} onClose={handleCloseModal} />

    </PageContainer>
  );
};

export default AdminProducts;
