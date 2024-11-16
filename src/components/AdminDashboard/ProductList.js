// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductsPage = () => {
//   const [approvedProducts, setApprovedProducts] = useState([]);
//   const [rejectedProducts, setRejectedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the token from localStorage (assuming it's stored there after login)
//   const token = localStorage.getItem('token'); 

//   // Fetch approved products
//   const fetchApprovedProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/product/admin/products/approved', {
//         headers: {
//           Authorization: `Bearer ${token}`,  // Send the token in the Authorization header
//         },
//       });
//       setApprovedProducts(response.data);
//     } catch (err) {
//       setError('Error fetching approved products');
//       console.error('Error fetching approved products:', err);
//     }
//   };

//   // Fetch rejected products
//   const fetchRejectedProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/product/admin/products/rejected', {
//         headers: {
//           Authorization: `Bearer ${token}`,  // Send the token in the Authorization header
//         },
//       });
//       setRejectedProducts(response.data);
//     } catch (err) {
//       setError('Error fetching rejected products');
//       console.error('Error fetching rejected products:', err);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchApprovedProducts();
//       fetchRejectedProducts();
//     } else {
//       setError('You are not authorized. Please log in.');
//     }
//     setLoading(false);
//   }, [token]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="products-container">
//       <div className="approved-products">
//         <h2>Approved Products</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Type</th>
//               <th>Weight</th>
//               <th>Price</th>
//               <th>Stock</th>
//               <th>Description</th>
//               <th>Business Name</th>
//               <th>Status</th>
//               <th>Images</th>
//             </tr>
//           </thead>
//           <tbody>
//             {approvedProducts.map(product => (
//               <tr key={product._id}>
//                 <td>{product.name}</td>
//                 <td>{product.type}</td>
//                 <td>{product.weight}</td>
//                 <td>{product.price}</td>
//                 <td>{product.stock}</td>
//                 <td>{product.description}</td>
//                 <td>{product.businessName}</td>
//                 <td>{product.status}</td>
//                 <td>
//                   {product.imageUrls && product.imageUrls.map((imageUrl, index) => (
//                     <img
//                       key={index}
//                       src={imageUrl} // This should be the URL of the image (Cloudinary or other)
//                       alt={`Product Image ${index + 1}`}
//                       style={{ width: '100px', height: 'auto', marginRight: '10px' }}
//                     />
//                   ))}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="rejected-products">
//         <h2>Rejected Products</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Type</th>
//               <th>Weight</th>
//               <th>Price</th>
//               <th>Stock</th>
//               <th>Description</th>
//               <th>Business Name</th>
//               <th>Status</th>
//               <th>Images</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rejectedProducts.map(product => (
//               <tr key={product._id}>
//                 <td>{product.name}</td>
//                 <td>{product.type}</td>
//                 <td>{product.weight}</td>
//                 <td>{product.price}</td>
//                 <td>{product.stock}</td>
//                 <td>{product.description}</td>
//                 <td>{product.businessName}</td>
//                 <td>{product.status}</td>
//                 <td>
//                   {product.imageUrls && product.imageUrls.map((imageUrl, index) => (
//                     <img
//                       key={index}
//                       src={imageUrl} // Display image URL
//                       alt={`Rejected Product Image ${index + 1}`}
//                       style={{ width: '100px', height: 'auto', marginRight: '10px' }}
//                     />
//                   ))}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Typography, Tabs, Tab, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Dialog, DialogContent, IconButton } from '@mui/material';
// import { CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from '@mui/icons-material';

// const ProductList = () => {
//   const [approvedProducts, setApprovedProducts] = useState([]);
//   const [rejectedProducts, setRejectedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [tabValue, setTabValue] = useState('approved');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const suppliersPerPage = 10; // Adjusted to 10 products per page

//   const token = localStorage.getItem('token');

//   const fetchApprovedProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/product/admin/products/approved', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setApprovedProducts(response.data);
//     } catch (err) {
//       setError('Error fetching approved products');
//       console.error('Error fetching approved products:', err);
//     }
//   };

//   const fetchRejectedProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/product/admin/products/rejected', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setRejectedProducts(response.data);
//     } catch (err) {
//       setError('Error fetching rejected products');
//       console.error('Error fetching rejected products:', err);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchApprovedProducts();
//       fetchRejectedProducts();
//     } else {
//       setError('You are not authorized. Please log in.');
//     }
//     setLoading(false);
//   }, [token]);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   const handlePageChange = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const filteredApprovedProducts = approvedProducts.filter(product => 
//     (product.businessName && product.businessName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (product.email && product.email.toLowerCase().includes(searchTerm.toLowerCase()))
//   );
  
//   const filteredRejectedProducts = rejectedProducts.filter(product => 
//     (product.businessName && product.businessName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (product.email && product.email.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px', height: '100vh' }}>
//       <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
//         Product Management
//       </Typography>

//       {/* Tabs for Approved and Rejected */}
//       <Tabs value={tabValue} onChange={handleTabChange} centered TabIndicatorProps={{ style: { display: 'none' } }}>
//         <Tab 
//           label="Approved" 
//           value="approved" 
//           style={{ backgroundColor: '#131842', color: '#ECCEAE', fontWeight: 'bold', borderRadius: '10px', justifyContent: 'space-between', marginRight:'10px', '&:hover': { backgroundColor: '#FBF6E2',color: '#131842' } }} 
//         />
//         <Tab 
//           label="Rejected" 
//           value="rejected" 
//           style={{ backgroundColor: '#ECCEAE', color: '#131842', fontWeight: 'bold', borderRadius: '10px', justifyContent: 'space-between', marginLeft:'10px', '&:hover': { backgroundColor: '#FBF6E2',color: '#ECCEAE' } }} 
//         />
//       </Tabs>

//       {/* Search Bar */}
//       <TextField
//         label="Search by Business Name or Email"
//         variant="outlined"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           backgroundColor: '#ECCEAE',
//           borderRadius: '15px',
//           margin: '1rem 0',
//           width: '20%',
//         }}
//       />

//       {/* Product Table */}
//       {tabValue === 'approved' ? (
//         <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: '#131842' }}>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Name</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Type</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Price</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Stock</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Business Name</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Description</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Images</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredApprovedProducts.slice((currentPage - 1) * suppliersPerPage, currentPage * suppliersPerPage).map(product => (
//                 <TableRow key={product._id} sx={{
//                   '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
//                   '&:hover': { backgroundColor: '#E68369' }
//                 }}>
//                   <TableCell>{product.name}</TableCell>
//                   <TableCell>{product.type}</TableCell>
//                   <TableCell>{product.price}</TableCell>
//                   <TableCell>{product.stock}</TableCell>
//                   <TableCell>{product.businessName}</TableCell>
//                   <TableCell>{product.description}</TableCell>
//                   <TableCell>
//                     {product.imageUrls && product.imageUrls.map((imageUrl, index) => (
//                       <img
//                         key={index}
//                         src={imageUrl}
//                         alt={`Product Image ${index + 1}`}
//                         style={{ width: '100px', height: 'auto', marginRight: '10px' }}
//                         onClick={() => handleImageClick(imageUrl)}
//                       />
//                     ))}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: '#131842' }}>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Name</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Type</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Price</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Stock</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Business Name</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Description</TableCell>
//                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Images</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredRejectedProducts.slice((currentPage - 1) * suppliersPerPage, currentPage * suppliersPerPage).map(product => (
//                 <TableRow key={product._id} sx={{
//                   '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
//                   '&:hover': { backgroundColor: '#E68369' }
//                 }}>
//                   <TableCell>{product.name}</TableCell>
//                   <TableCell>{product.type}</TableCell>
//                   <TableCell>{product.price}</TableCell>
//                   <TableCell>{product.stock}</TableCell>
//                   <TableCell>{product.businessName}</TableCell>
//                   <TableCell>{product.description}</TableCell>
//                   <TableCell>
//                     {product.imageUrls && product.imageUrls.map((imageUrl, index) => (
//                       <img
//                         key={index}
//                         src={imageUrl}
//                         alt={`Rejected Product Image ${index + 1}`}
//                         style={{ width: '100px', height: 'auto', marginRight: '10px' }}
//                         onClick={() => handleImageClick(imageUrl)}
//                       />
//                     ))}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}

//       {/* Pagination */}
//       <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
//                 <Pagination
//                     count={Math.ceil(filteredApprovedProducts.length / suppliersPerPage)}
//                     page={currentPage}
//                     onChange={handlePageChange}
//                     color="primary"
//                     sx={{
//                         '& .MuiPaginationItem-root': {
//                             backgroundColor: '#ECCEAE',
//                             color: '#131842',
//                         },
//                         '& .MuiPaginationItem-root.Mui-selected': {
//                             backgroundColor: '#E68369',
//                             color: '#FBF6E2',
//                         }
//                     }}
//                 />
//             </div>

//       {/* Image Modal */}
//       <Dialog open={selectedImage !== null} onClose={handleCloseModal}>
//         <DialogContent>
//           <img src={selectedImage} alt="Selected Product" style={{ width: '100%' }} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default ProductList;



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

const ProductList = () => {
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
                        ? 'http://localhost:5000/api/product/admin/products/approved'
                        : 'http://localhost:5000/api/product/admin/products/rejected';

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

export default ProductList;
