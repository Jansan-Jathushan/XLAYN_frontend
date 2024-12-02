
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
    Typography, Pagination, Dialog, DialogContent, Tabs, Tab
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledTab = styled(Tab)(({ bgColor }) => ({
    backgroundColor: bgColor,
    color: '#FBF6E2',
    fontWeight: 'bold',
    borderRadius: '8px',
    margin: '0 5px',
    '&.Mui-selected': {
        backgroundColor: '#FBF6E2',
        color: bgColor,
    },
}));

const ProductLists = () => {
    const [tabValue, setTabValue] = useState('approved');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

    const productsPerPage = 10; // Show 10 products per page
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const endpoint =
                    tabValue === 'approved'
                        ? `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/supplier/products/approved`
                        : `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/supplier/products/rejected`;

                const response = await axios.get(endpoint, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [tabValue, token]);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setCurrentPage(1); // Reset to first page on tab change
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <div style={{ backgroundColor: '#FBF6E2', minHeight: '100vh', padding: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: '#FBF6E2', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom>
                    Product Management
                </Typography>

                {/* Tabs for filtering */}
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                    TabIndicatorProps={{ style: { display: 'none' } }}
                >
                    <StyledTab label="Approved" value="approved" bgColor="#E68369" />
                    <StyledTab label="Rejected" value="rejected" bgColor="#ECCEAE" />
                </Tabs>

                {/* Search Bar */}
                <TextField
                    label="Search Products"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        margin: '1rem 0',
                        backgroundColor: '#FBF6E2',
                        borderRadius: '8px',
                        width: '30%',
                    }}
                />

                {/* Product Table */}
                <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#131842' }}>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Type</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Weight</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Price</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Stock</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Business Name</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Description</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Image</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Status</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedProducts.map((product) => (
                                <TableRow key={product._id} sx={{
                                    '&:hover': { backgroundColor: '#E68369' },
                                    '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
                                }}>
                                    
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.type}</TableCell>
                                    <TableCell>{product.weight} </TableCell>
                                    <TableCell>${product.price}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>{product.businessName}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>
                                        <img
                                            src={product.imageUrls[0]}
                                            alt={product.name}
                                            style={{ width: '50px', cursor: 'pointer' }}
                                            onClick={() => handleImageClick(product.imageUrls[0])}
                                        />
                                    </TableCell>
                                    <TableCell>{product.status}</TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Pagination */}
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
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
                        }
                    }}
                />
                </div>

                {/* Image Modal */}
                <Dialog open={selectedImage !== null} onClose={handleCloseModal}>
                    <DialogContent>
                        <img src={selectedImage} alt="Product" style={{ width: '100%' }} />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default ProductLists;
