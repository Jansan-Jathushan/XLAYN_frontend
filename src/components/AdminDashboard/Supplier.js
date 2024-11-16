// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
//     IconButton, Typography, Button, Pagination, InputAdornment, Dialog, DialogContent
// } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { styled } from '@mui/material/styles';

// const StyledIconButton = styled(IconButton)(({ color }) => ({
//     color: color,
// }));


// const SupplierRequests = () => {
//     const [supplierRequests, setSupplierRequests] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedImage, setSelectedImage] = useState(null); // For modal image
//     const suppliersPerPage = 10;

//     useEffect(() => {
//         const fetchSupplierRequests = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/register-request/supplier-requests');
//                 setSupplierRequests(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching supplier requests:', error);
//                 setLoading(false);
//             }
//         };
//         fetchSupplierRequests();
//     }, []);

//     const approveSupplier = async (id) => {
//         try {
//             await axios.put(`http://localhost:5000/api/register-request/approve-supplier/${id}`);
//             setSupplierRequests(supplierRequests.filter(request => request._id !== id));
//         } catch (error) {
//             console.error('Error approving supplier:', error);
//         }
//     };

//     const rejectSupplier = async (id) => {
//         try {
//             await axios.put(`http://localhost:5000/api/register-request/reject-supplier/${id}`);
//             setSupplierRequests(supplierRequests.filter(request => request._id !== id));
//         } catch (error) {
//             console.error('Error rejecting supplier:', error);
//         }
//     };

//     const filteredRequests = supplierRequests.filter(request =>
//         request.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         request.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const indexOfLastRequest = currentPage * suppliersPerPage;
//     const indexOfFirstRequest = indexOfLastRequest - suppliersPerPage;
//     const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);

//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//     };

//     const handleImageClick = (url) => {
//         setSelectedImage(url); // Open modal with selected image
//     };

//     const handleCloseModal = () => {
//         setSelectedImage(null); // Close modal
//     };

//     return (
//         <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px' }}>
//             <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
//                 Supplier Requests
//             </Typography>

//             {/* Search Bar */}
//             <TextField
//                 label="Search by Business Name or Email"
//                 variant="outlined"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 style={{ backgroundColor: '#ECCEAE', borderRadius: '15px', marginBottom: '1rem',  width: '20%'}}
               
//             />

//             {/* Supplier Requests Table */}
//             {loading ? (
//                 <Typography>Loading...</Typography>
//             ) : (
//                 <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
//                     <Table>
//                         <TableHead>
//                             <TableRow sx={{ backgroundColor: '#131842' }}>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Username</TableCell>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Business Name</TableCell>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Address</TableCell>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Business Proof</TableCell>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Store Image</TableCell>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Bank Account Info</TableCell>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Email</TableCell>
//                                 <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Actions</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {currentRequests.map(request => (
//                                 <TableRow key={request._id} sx={{
//                                     '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
//                                     '&:hover': { backgroundColor: '#E68369' }
//                                 }}>
//                                     <TableCell>{request.username}</TableCell>
//                                     <TableCell>{request.businessName}</TableCell>
//                                     <TableCell>{request.address}</TableCell>
//                                     <TableCell>
//                                         <img
//                                             src={request.businessProof}
//                                             alt="Business Proof"
//                                             onClick={() => handleImageClick(request.businessProof)}
//                                             style={{ width: '80px', height: '80px', cursor: 'pointer', borderRadius: '8px' }}
//                                         />
//                                     </TableCell>
//                                     <TableCell>
//                                         <img
//                                             src={request.storeImage}
//                                             alt="Store Image"
//                                             onClick={() => handleImageClick(request.storeImage)}
//                                             style={{ width: '80px', height: '80px', cursor: 'pointer', borderRadius: '8px' }}
//                                         />
//                                     </TableCell>
//                                     <TableCell>{request.bankAccountInfo}</TableCell>
//                                     <TableCell>{request.email}</TableCell>
//                                     <TableCell>
//                                     <StyledIconButton color="#131842" onClick={() => approveSupplier(request._id)}>
//                                         <CheckCircleIcon />
//                                     </StyledIconButton>
//                                     <StyledIconButton color="#131842" onClick={() => rejectSupplier(request._id)}>
//                                         <CancelIcon />
//                                     </StyledIconButton>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}

//             {/* Pagination */}
//             <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
//                 <Pagination
//                     count={Math.ceil(filteredRequests.length / suppliersPerPage)}
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

//             {/* Image Modal */}
//             <Dialog open={!!selectedImage} onClose={handleCloseModal} maxWidth="md">
//                 <DialogContent>
//                     <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

// export default SupplierRequests;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
    IconButton, Typography, Pagination, Dialog, DialogContent, Tabs, Tab
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)(({ color }) => ({
    color: color,
}));

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

const Suppliers = () => {
    const [supplierRequests, setSupplierRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [tabValue, setTabValue] = useState("pending");
    const suppliersPerPage = 10;

    useEffect(() => {
        fetchSupplierRequests();
    }, [tabValue]);

    const fetchSupplierRequests = async () => {
        setLoading(true);
        const endpointMap = {
            pending: 'http://localhost:5000/api/register-request/supplier-requests',
            approved: 'http://localhost:5000/api/register-request/approved-suppliers',
            rejected: 'http://localhost:5000/api/register-request/rejected-suppliers'
        };
        try {
            const response = await axios.get(endpointMap[tabValue]);
            setSupplierRequests(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching supplier requests:', error);
            setLoading(false);
        }
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setCurrentPage(1);  // Reset to first page on tab switch
        setSearchTerm('');   // Clear search term on tab switch
    };

    const approveSupplier = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/register-request/approve-supplier/${id}`);
            fetchSupplierRequests();
        } catch (error) {
            console.error('Error approving supplier:', error);
        }
    };

    const rejectSupplier = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/register-request/reject-supplier/${id}`);
            fetchSupplierRequests();
        } catch (error) {
            console.error('Error rejecting supplier:', error);
        }
    };

    const filteredRequests = supplierRequests.filter(request =>
        request.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastRequest = currentPage * suppliersPerPage;
    const indexOfFirstRequest = indexOfLastRequest - suppliersPerPage;
    const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleImageClick = (url) => {
        setSelectedImage(url);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px', height :'100vh' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
                Supplier Management
            </Typography>

            {/* Tabs for Pending, Approved, and Rejected */}
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                centered
                TabIndicatorProps={{ style: { display: 'none' } }}
            >
                <StyledTab label="Pending" value="pending" bgColor="#131842" />
                <StyledTab label="Approved" value="approved" bgColor="#E68369" />
                <StyledTab label="Rejected" value="rejected" bgColor="#ECCEAE" />
            </Tabs>

            {/* Search Bar */}
            <TextField
                label="Search by Business Name or Email"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ backgroundColor: '#ECCEAE', borderRadius: '15px', margin: '1rem 0', width: '20%' }}
            />

            {/* Supplier Requests Table */}
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#131842' }}>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Username</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Business Name</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Address</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Business Proof</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Store Image</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Bank Account Info</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentRequests.map(request => (
                                <TableRow key={request._id} sx={{
                                    '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
                                    '&:hover': { backgroundColor: '#E68369' }
                                }}>
                                    <TableCell>{request.username}</TableCell>
                                    <TableCell>{request.businessName}</TableCell>
                                    <TableCell>{request.address}</TableCell>
                                    <TableCell>
                                        <img
                                            src={request.businessProof}
                                            alt="Business Proof"
                                            onClick={() => handleImageClick(request.businessProof)}
                                            style={{ width: '80px', height: '80px', cursor: 'pointer', borderRadius: '8px' }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <img
                                            src={request.storeImage}
                                            alt="Store Image"
                                            onClick={() => handleImageClick(request.storeImage)}
                                            style={{ width: '80px', height: '80px', cursor: 'pointer', borderRadius: '8px' }}
                                        />
                                    </TableCell>
                                    <TableCell>{request.bankAccountInfo}</TableCell>
                                    <TableCell>{request.email}</TableCell>
                                    <TableCell>
                                        {tabValue === 'pending' ? (
                                            <>
                                                <StyledIconButton color="#131842" onClick={() => approveSupplier(request._id)}>
                                                    <CheckCircleIcon />
                                                </StyledIconButton>
                                                <StyledIconButton color="#131842" onClick={() => rejectSupplier(request._id)}>
                                                    <CancelIcon />
                                                </StyledIconButton>
                                            </>
                                        ) : (
                                            <Typography sx={{ color: tabValue === 'approved' ? '#131842' : '#E68369' }}>
                                                {tabValue === 'approved' ? 'Approved' : 'Rejected'}
                                            </Typography>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Pagination */}
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    count={Math.ceil(filteredRequests.length / suppliersPerPage)}
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
            <Dialog open={!!selectedImage} onClose={handleCloseModal} maxWidth="md">
                <DialogContent>
                    <img src={selectedImage} alt="Enlarged" style={{ width: '100%', borderRadius: '8px' }} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Suppliers;
