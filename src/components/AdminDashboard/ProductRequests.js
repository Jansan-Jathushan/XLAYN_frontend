// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PendingProducts = () => {
//   const [pendingProducts, setPendingProducts] = useState([]);

//   useEffect(() => {
//     fetchPendingProducts();
//   }, []);

//   const fetchPendingProducts = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve token from localStorage

//       const res = await axios.get('http://localhost:5000/api/product/admin/products/pending', {
//         headers: {
//           Authorization: `Bearer ${token}`, // Set authorization header
//         },
//       });
//       setPendingProducts(res.data);
//     } catch (err) {
//       console.error('Error fetching pending products:', err);
//     }
//   };

//   const handleApprove = async (id) => {
//     try {
//       const token = localStorage.getItem('token');

//       await axios.post(`http://localhost:5000/api/product/admin/approveproducts/${id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert('Product approved successfully');
//       fetchPendingProducts(); // Refresh list after approval
//     } catch (err) {
//       console.error('Error approving product:', err);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const token = localStorage.getItem('token');

//       await axios.post(`http://localhost:5000/api/product/admin/rejectproducts/${id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert('Product rejected successfully');
//       fetchPendingProducts(); // Refresh list after rejection
//     } catch (err) {
//       console.error('Error rejecting product:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Pending Products</h2>
//       <ul>
//         {pendingProducts.map((product) => (
//           <li key={product._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//             <h4>{product.name}</h4>
//             <p>Type: {product.type}</p>
//             <p>Weight: {product.weight}</p>
//             <p>Price: ${product.price}</p>
//             <p>Stock: {product.stock}</p>
//             <p>Description: {product.description}</p>
//             <p>Business Name: {product.businessName}</p>
//             {/* <p>Status: {product.status}</p> */}
//             {product.imageUrls && (
//               <div>
//                 <h5>Images:</h5>
//                 {product.imageUrls.map((url, index) => (
//                   <img key={index} src={url} alt="Product" width="100" style={{ margin: '5px' }} />
//                 ))}
//               </div>
//             )}
//           <p>Status: {product.status}</p>

//             <button onClick={() => handleApprove(product._id)}>Approve</button>
//             <button onClick={() => handleReject(product._id)}>Reject</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PendingProducts;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Pagination,
    IconButton, Dialog, DialogContent, TextField, InputAdornment, Select, MenuItem
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
    padding: '20px',
    backgroundColor: '#FBF6E2',
    minHeight: '100vh',
});

const StyledTableContainer = styled(TableContainer)({
    backgroundColor: '#ECCEAE',
});

const HeaderCell = styled(TableCell)({
    color: '#FBF6E2',
    fontWeight: 'bold',
    backgroundColor: '#131842',
});

const Row = styled(TableRow)(({ theme, index }) => ({
    backgroundColor: index % 2 === 0 ? '#FBF6E2' : '#ECCEAE',
    '&:hover': {
        backgroundColor: '#E68369',
        color: '#FBF6E2',
    },
}));

const ImageThumbnail = styled('img')({
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '5px',
    cursor: 'pointer',
});

const ActionButton = styled(IconButton)(({ color }) => ({
    color,
}));

const PendingProducts = () => {
    const [pendingProducts, setPendingProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        fetchPendingProducts();
    }, []);

    useEffect(() => {
        filterAndSearchProducts();
    }, [searchTerm, filterType, pendingProducts]);

    const fetchPendingProducts = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:5000/api/product/admin/products/pending', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPendingProducts(res.data);
        } catch (err) {
            console.error('Error fetching pending products:', err);
        }
    };

    const filterAndSearchProducts = () => {
        const filtered = pendingProducts.filter(product =>
            (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.businessName.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (filterType ? product.type === filterType : true)
        );
        setFilteredProducts(filtered);
    };

    const handleApprove = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`http://localhost:5000/api/product/admin/approveproducts/${id}`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Product approved successfully');
            fetchPendingProducts();
        } catch (err) {
            console.error('Error approving product:', err);
        }
    };

    const handleReject = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`http://localhost:5000/api/product/admin/rejectproducts/${id}`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Product rejected successfully');
            fetchPendingProducts();
        } catch (err) {
            console.error('Error rejecting product:', err);
        }
    };

    const handleImageClick = (url) => {
        setSelectedImage(url);
        setOpenDialog(true);
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{ color: '#131842', fontWeight: 'bold', marginBottom: '20px' }}>
                Pending Products
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <TextField
                    variant="outlined"
                    placeholder="Search by product or business name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    displayEmpty
                    style={{ width: '200px' }}
                >
                    <MenuItem value="">All Types</MenuItem>
                    {[...new Set(pendingProducts.map(product => product.type))].map((type) => (
                        <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                </Select>
            </div>

            <StyledTableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <HeaderCell>Product Name</HeaderCell>
                            <HeaderCell>Type</HeaderCell>
                            <HeaderCell>Weight</HeaderCell>
                            <HeaderCell>Price</HeaderCell>
                            <HeaderCell>Stock</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Business Name</HeaderCell>
                            <HeaderCell>Images</HeaderCell>
                            <HeaderCell>Status</HeaderCell>
                            <HeaderCell>Actions</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.slice((page - 1) * 10, page * 10).map((product, index) => (
                            <Row key={product._id} index={index}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.type}</TableCell>
                                <TableCell>{product.weight}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.businessName}</TableCell>
                                <TableCell>
                                    {product.imageUrls && product.imageUrls.length > 0 ? (
                                        <ImageThumbnail
                                            src={product.imageUrls[0]}
                                            alt="Product"
                                            onClick={() => handleImageClick(product.imageUrls[0])}
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </TableCell>
                                <TableCell>{product.status}</TableCell>
                                <TableCell>
                                    <ActionButton color="#131842" onClick={() => handleApprove(product._id)}>
                                        <CheckCircleIcon />
                                    </ActionButton>
                                    <ActionButton color="#131842" onClick={() => handleReject(product._id)}>
                                        <CancelIcon />
                                    </ActionButton>
                                </TableCell>
                            </Row>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>

            <Pagination
                count={Math.ceil(filteredProducts.length / 10)}
                page={page}
                onChange={handleChangePage}
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogContent>
                    <img src={selectedImage} alt="Product" style={{ width: '100%', height: 'auto' }} />
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default PendingProducts;
