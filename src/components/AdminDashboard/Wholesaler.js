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

const Wholesalers = () => {
    const [wholesalerRequests, setWholesalerRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [tabValue, setTabValue] = useState("pending");
    const wholesalersPerPage = 10;

    useEffect(() => {
        fetchWholesalerRequests();
    }, [tabValue]);

    const fetchWholesalerRequests = async () => {
        setLoading(true);
        const endpointMap = {
            pending: `${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/wholesaler-requests`,
            approved: `${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/approved-wholesalers`,
            rejected: `${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/rejected-wholesalers`
        };
        try {
            const response = await axios.get(endpointMap[tabValue]);
            setWholesalerRequests(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching wholesaler requests:', error);
            setLoading(false);
        }
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setCurrentPage(1);  // Reset to first page on tab switch
        setSearchTerm('');   // Clear search term on tab switch
    };

    const approveWholesaler = async (id) => {
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/approve-wholesaler/${id}`);
            fetchWholesalerRequests();
        } catch (error) {
            console.error('Error approving wholesaler:', error);
        }
    };

    const rejectWholesaler = async (id) => {
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/reject-wholesaler/${id}`);
            fetchWholesalerRequests();
        } catch (error) {
            console.error('Error rejecting wholesaler:', error);
        }
    };

    const filteredRequests = wholesalerRequests.filter(request =>
        request.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastRequest = currentPage * wholesalersPerPage;
    const indexOfFirstRequest = indexOfLastRequest - wholesalersPerPage;
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
        <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px', height: '100vh' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
                Wholesaler Management
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

            {/* Wholesaler Requests Table */}
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
                                                <StyledIconButton color="#131842" onClick={() => approveWholesaler(request._id)}>
                                                    <CheckCircleIcon />
                                                </StyledIconButton>
                                                <StyledIconButton color="#131842" onClick={() => rejectWholesaler(request._id)}>
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
                    count={Math.ceil(filteredRequests.length / wholesalersPerPage)}
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

export default Wholesalers;
