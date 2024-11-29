

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
//   IconButton, Typography, Pagination, InputAdornment
// } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';

// const ContactList = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredContacts, setFilteredContacts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 10; // Adjust as needed

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/contact/contact-us');
//         setContacts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching contact forms:', error);
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   useEffect(() => {
//     setFilteredContacts(
//       contacts.filter(contact =>
//         contact.email.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [contacts, searchTerm]);

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredContacts.slice(indexOfFirstUser, indexOfLastUser);

//   return (
//     <div style={{ backgroundColor: '#FBF6E2', minHeight: '100vh', padding: '2rem' }}>
//       <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px' }}>
//         <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
//           Contact Forms
//         </Typography>

//         {/* Search */}
//         <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//           <TextField
//             label="Search by email"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ backgroundColor: '#ECCEAE', borderRadius: '15px' }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton>
//                     <FilterListIcon sx={{ color: '#131842' }} />
//                   </IconButton>
//                 </InputAdornment>
//               )
//             }}
//           />
//         </div>

//         {/* Contact Forms Table */}
//         {loading ? (
//           <Typography>Loading...</Typography>
//         ) : (
//           <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: '#131842' }}>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Name</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Email</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Phone Number</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Subject</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Message</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {currentUsers.map(contact => (
//                   <TableRow key={contact._id} sx={{
//                     '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
//                     '&:hover': { backgroundColor: '#E68369' }
//                   }}>
//                     <TableCell>{contact.name}</TableCell>
//                     <TableCell>{contact.email}</TableCell>
//                     <TableCell>{contact.phoneNumber || 'N/A'}</TableCell>
//                     <TableCell>{contact.subject || 'N/A'}</TableCell>
//                     <TableCell>{contact.message}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}

//         {/* Pagination */}
//         <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
//           <Pagination
//             count={Math.ceil(filteredContacts.length / usersPerPage)}
//             page={currentPage}
//             onChange={handlePageChange}
//             color="primary"
//             sx={{
//               '& .MuiPaginationItem-root': {
//                 backgroundColor: '#ECCEAE',
//                 color: '#131842',
//               },
//               '& .MuiPaginationItem-root.Mui-selected': {
//                 backgroundColor: '#E68369',
//                 color: '#FBF6E2',
//               }
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
//   IconButton, Typography, Pagination, InputAdornment, Button
// } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import ReplyIcon from '@mui/icons-material/Reply';

// const ContactList = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredContacts, setFilteredContacts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 10;

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/contact/contact-us');
//         setContacts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching contact forms:', error);
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   useEffect(() => {
//     setFilteredContacts(
//       contacts.filter(contact =>
//         contact.email.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [contacts, searchTerm]);

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const fetchContactFormEmail = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/contact/contact-us/reply/${id}`);
//       const data = await response.json();

//       if (response.ok) {
//         return data.email;
//       } else {
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching contact form:', error);
//     }
//   };

//   const handleReply = async (id) => {
//     const email = await fetchContactFormEmail(id);

//     if (email) {
//       window.location.href = `mailto:${email}`;
//     } else {
//       alert('Failed to fetch email');
//     }
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredContacts.slice(indexOfFirstUser, indexOfLastUser);

//   return (
//     <div style={{ backgroundColor: '#FBF6E2', minHeight: '100vh', padding: '2rem' }}>
//       <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px' }}>
//         <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
//           Contact Forms
//         </Typography>

//         {/* Search */}
//         <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//           <TextField
//             label="Search by email"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ backgroundColor: '#ECCEAE', borderRadius: '15px' }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton>
//                     <FilterListIcon sx={{ color: '#131842' }} />
//                   </IconButton>
//                 </InputAdornment>
//               )
//             }}
//           />
//         </div>

//         {/* Contact Forms Table */}
//         {loading ? (
//           <Typography>Loading...</Typography>
//         ) : (
//           <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: '#131842' }}>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Name</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Email</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Phone Number</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Subject</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Message</TableCell>
//                   <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Reply</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {currentUsers.map(contact => (
//                   <TableRow key={contact._id} sx={{
//                     '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
//                     '&:hover': { backgroundColor: '#E68369' }
//                   }}>
//                     <TableCell>{contact.name}</TableCell>
//                     <TableCell>{contact.email}</TableCell>
//                     <TableCell>{contact.phoneNumber || 'N/A'}</TableCell>
//                     <TableCell>{contact.subject || 'N/A'}</TableCell>
//                     <TableCell>{contact.message}</TableCell>
//                     <TableCell>
//                       <Button
//                         variant="outlined"
//                         startIcon={<ReplyIcon />}
//                         onClick={() => handleReply(contact._id)}
//                         sx={{
//                           color: '#131842',
//                           borderColor: '#E68369',
//                           '&:hover': {
//                             backgroundColor: '#E68369',
//                             color: '#FBF6E2',
//                             borderColor: '#E68369'
//                           }
//                         }}
//                       >
//                         Reply
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}

//         {/* Pagination */}
//         <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
//           <Pagination
//             count={Math.ceil(filteredContacts.length / usersPerPage)}
//             page={currentPage}
//             onChange={handlePageChange}
//             color="primary"
//             sx={{
//               '& .MuiPaginationItem-root': {
//                 backgroundColor: '#ECCEAE',
//                 color: '#131842',
//               },
//               '& .MuiPaginationItem-root.Mui-selected': {
//                 backgroundColor: '#E68369',
//                 color: '#FBF6E2',
//               }
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
  IconButton, Typography, Pagination, InputAdornment
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ReplyIcon from '@mui/icons-material/Reply';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Adjust as needed

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact/contact-us');
        setContacts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contact forms:', error);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [contacts, searchTerm]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const fetchContactFormEmail = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/contact/contact-us/reply/${id}`);
      const data = await response.json();

      if (response.ok) {
        return data.email;
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching contact form:', error);
    }
  };

  const handleReply = async (id) => {
    const email = await fetchContactFormEmail(id);

    if (email) {
      // Gmail compose URL
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
      window.open(gmailURL, '_blank');
    } else {
      alert('Failed to fetch email');
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredContacts.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div style={{ backgroundColor: '#FBF6E2', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
          Contact Forms
        </Typography>

        {/* Search */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <TextField
            label="Search by email"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ backgroundColor: '#ECCEAE', borderRadius: '15px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <FilterListIcon sx={{ color: '#131842' }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>

        {/* Contact Forms Table */}
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#131842' }}>
                  <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Phone Number</TableCell>
                  <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Subject</TableCell>
                  <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Message</TableCell>
                  <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentUsers.map(contact => (
                  <TableRow
                    key={contact._id}
                    sx={{
                      '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
                      '&:hover': { backgroundColor: '#E68369' }
                    }}
                  >
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phoneNumber || 'N/A'}</TableCell>
                    <TableCell>{contact.subject || 'N/A'}</TableCell>
                    <TableCell>{contact.message}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleReply(contact._id)}
                        sx={{ color: '#131842' }}
                      >
                        <ReplyIcon />
                      </IconButton>
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
            count={Math.ceil(filteredContacts.length / usersPerPage)}
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
      </div>
    </div>
  );
};

export default ContactList;
