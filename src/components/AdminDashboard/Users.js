// // // Users.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';


// // const Users = () => {
// //     const [users, setUsers] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         const fetchUsers = async () => {
// //             try {
// //                 const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users');
// //                 setUsers(response.data);
// //                 setLoading(false);
// //             } catch (error) {
// //                 console.error('Error fetching users:', error);
// //             }
// //         };
// //         fetchUsers();
// //     }, []);

// //     const handleDeleteUser = async (userId) => {
// //         try {
// //             await axios.delete('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${userId}');
// //             setUsers(users.filter(user => user._id !== userId)); // Update UI after delete
// //         } catch (error) {
// //             console.error('Error deleting user:', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Users Management</h2>
// //             {loading ? (
// //                 <p>Loading...</p>
// //             ) : (
// //                 <table className="table">
// //                     <thead>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th>Email</th>
// //                             <th>Role</th>
// //                             <th>Actions</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {users.map(user => (
// //                             <tr key={user._id}>
// //                                 <td>{user.username}</td>
// //                                 <td>{user.email}</td>
// //                                 <td>{user.role}</td>
// //                                 <td>
// //                                     <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger">Delete</button>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             )}
// //         </div>
// //     );
// // };

// // export default Users;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [newRole, setNewRole] = useState('');

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users');
//                 setUsers(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     const handleDeleteUser = async (userId) => {
//         try {
//             await axios.delete('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${userId}');
//             setUsers(users.filter(user => user._id !== userId)); // Update UI after delete
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const handleUpdateRole = async () => {
//         try {
//             await axios.put('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${selectedUser._id}', {
//                 role: newRole
//             });
//             setUsers(users.map(user => user._id === selectedUser._id ? { ...user, role: newRole } : user));
//             setSelectedUser(null); // Close the update form
//             setNewRole(''); // Reset role field
//         } catch (error) {
//             console.error('Error updating role:', error);
//         }
//     };

//     const openUpdateForm = (user) => {
//         setSelectedUser(user);
//         setNewRole(user.role); // Pre-fill with current role
//     };

//     return (
//         <div>
//             <h2>Users Management</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user._id}>
//                                 <td>{user.username}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.role}</td>
//                                 <td>
//                                     {user.role !== 'admin' && (
//                                         <>
//                                             <button onClick={() => openUpdateForm(user)} className="btn btn-primary">Update</button>
//                                             <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger ml-2">Delete</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}

//             {/* Update form */}
//             {selectedUser && (
//                 <div className="mt-4">
//                     <h3>Update Role for {selectedUser.username}</h3>
//                     <div className="form-group">
//                         <label>New Role</label>
//                         <select 
//                             className="form-control" 
//                             value={newRole} 
//                             onChange={(e) => setNewRole(e.target.value)}
//                         >
//                             <option value="user">user</option>
//                             <option value="supplier">Supplier</option>
//                             <option value="wholesaler">Wholesaler</option>
//                             <option value="admin">admin</option>
//                         </select>
//                     </div>
//                     <button onClick={handleUpdateRole} className="btn btn-success mt-2">Save</button>
//                     <button onClick={() => setSelectedUser(null)} className="btn btn-secondary mt-2 ml-2">Cancel</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Users;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [newRole, setNewRole] = useState('');

//     // State for supplier and wholesaler requests
//     const [supplierRequests, setSupplierRequests] = useState([]);
//     const [wholesalerRequests, setWholesalerRequests] = useState([]);

//     useEffect(() => {
//         const fetchUsersAndRequests = async () => {
//             try {
//                 // Fetch users
//                 const userResponse = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users');
//                 setUsers(userResponse.data);

//                 // Fetch pending supplier and wholesaler requests
//                 const supplierResponse = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/supplier-requests');
//                 const wholesalerResponse = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/wholesaler-requests');
//                 setSupplierRequests(supplierResponse.data);
//                 setWholesalerRequests(wholesalerResponse.data);

//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchUsersAndRequests();
//     }, []);

//     const handleDeleteUser = async (userId) => {
//         try {
//             await axios.delete('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${userId}');
//             setUsers(users.filter(user => user._id !== userId)); // Update UI after delete
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const handleUpdateRole = async () => {
//         try {
//             await axios.put('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${selectedUser._id}', {
//                 role: newRole
//             });
//             setUsers(users.map(user => user._id === selectedUser._id ? { ...user, role: newRole } : user));
//             setSelectedUser(null); // Close the update form
//             setNewRole(''); // Reset role field
//         } catch (error) {
//             console.error('Error updating role:', error);
//         }
//     };

//     const openUpdateForm = (user) => {
//         setSelectedUser(user);
//         setNewRole(user.role); // Pre-fill with current role
//     };

//     // Handle approve or reject for suppliers and wholesalers
//     const handleSupplierAction = async (id, action) => {
//         try {
//             await axios.post('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/${action}', { id });
//             setSupplierRequests(supplierRequests.filter(request => request._id !== id)); // Remove the request from the UI
//         } catch (error) {
//             console.error('Error trying to ${action} supplier:', error);
//         }
//     };

//     const handleWholesalerAction = async (id, action) => {
//         try {
//             await axios.post('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/${action}', { id });
//             setWholesalerRequests(wholesalerRequests.filter(request => request._id !== id)); // Remove the request from the UI
//         } catch (error) {
//             console.error('Error trying to ${action} wholesaler:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Users Management</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Username</th>
//                                 <th>Email</th>
//                                 <th>Role</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map(user => (
//                                 <tr key={user._id}>
//                                     <td>{user.username}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.role}</td>
//                                     <td>
//                                         {user.role !== 'admin' && (
//                                             <>
//                                                 <button onClick={() => openUpdateForm(user)} className="btn btn-primary">Update</button>
//                                                 <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger ml-2">Delete</button>
//                                             </>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     {/* Update form */}
//                     {selectedUser && (
//                         <div className="mt-4">
//                             <h3>Update Role for {selectedUser.username}</h3>
//                             <div className="form-group">
//                                 <label>New Role</label>
//                                 <select
//                                     className="form-control"
//                                     value={newRole}
//                                     onChange={(e) => setNewRole(e.target.value)}
//                                 >
//                                     <option value="user">user</option>
//                                     <option value="supplier">Supplier</option>
//                                     <option value="wholesaler">Wholesaler</option>
//                                     <option value="admin">admin</option>
//                                 </select>
//                             </div>
//                             <button onClick={handleUpdateRole} className="btn btn-success mt-2">Save</button>
//                             <button onClick={() => setSelectedUser(null)} className="btn btn-secondary mt-2 ml-2">Cancel</button>
//                         </div>
//                     )}

//                     {/* Pending Supplier and Wholesaler Requests */}
//                     <div className="mt-5">
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <h3>Pending Supplier Requests</h3>
//                                 {supplierRequests.length > 0 ? (
//                                     <ul className="list-group">
//                                         {supplierRequests.map((request) => (
//                                             <li className="list-group-item" key={request._id}>
//                                                 <p>Business Name: {request.businessName}</p>
//                                                 <p>Email: {request.email}</p>
//                                                 <button
//                                                     className="btn btn-success"
//                                                     onClick={() => handleSupplierAction(request._id, 'approve')}
//                                                 >
//                                                     Approve
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-danger ml-2"
//                                                     onClick={() => handleSupplierAction(request._id, 'reject')}
//                                                 >
//                                                     Reject
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 ) : (
//                                     <p>No pending supplier requests.</p>
//                                 )}
//                             </div>

//                             <div className="col-md-6">
//                                 <h3>Pending Wholesaler Requests</h3>
//                                 {wholesalerRequests.length > 0 ? (
//                                     <ul className="list-group">
//                                         {wholesalerRequests.map((request) => (
//                                             <li className="list-group-item" key={request._id}>
//                                                 <p>Business Name: {request.businessName}</p>
//                                                 <p>Email: {request.email}</p>
//                                                 <button
//                                                     className="btn btn-success"
//                                                     onClick={() => handleWholesalerAction(request._id, 'approve')}
//                                                 >
//                                                     Approve
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-danger ml-2"
//                                                     onClick={() => handleWholesalerAction(request._id, 'reject')}
//                                                 >
//                                                     Reject
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 ) : (
//                                     <p>No pending wholesaler requests.</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Users;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [supplierRequests, setSupplierRequests] = useState([]);
//     const [wholesalerRequests, setWholesalerRequests] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [newRole, setNewRole] = useState('');

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users');
//                 setUsers(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };

//         const fetchSupplierRequests = async () => {
//             try {
//                 const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/supplier-requests');
//                 setSupplierRequests(response.data);
//             } catch (error) {
//                 console.error('Error fetching supplier requests:', error);
//             }
//         };

//         const fetchWholesalerRequests = async () => {
//             try {
//                 const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/wholesaler-requests');
//                 setWholesalerRequests(response.data);
//             } catch (error) {
//                 console.error('Error fetching wholesaler requests:', error);
//             }
//         };

//         fetchUsers();
//         fetchSupplierRequests();
//         fetchWholesalerRequests();
//     }, []);

//     // Handle delete user
//     const handleDeleteUser = async (userId) => {
//         try {
//             await axios.delete('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${userId}');
//             setUsers(users.filter(user => user._id !== userId));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     // Handle update user role
//     const handleUpdateRole = async () => {
//         try {
//             await axios.put('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${selectedUser._id}', {
//                 role: newRole
//             });
//             setUsers(users.map(user => user._id === selectedUser._id ? { ...user, role: newRole } : user));
//             setSelectedUser(null);
//             setNewRole('');
//         } catch (error) {
//             console.error('Error updating role:', error);
//         }
//     };

//     const openUpdateForm = (user) => {
//         setSelectedUser(user);
//         setNewRole(user.role);
//     };

//     // Approve Supplier
//     const approveSupplier = async (id) => {
//         try {
//             await axios.put('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/approve-supplier/${ id }');
//             setSupplierRequests(supplierRequests.filter(request => request._id !== id));
//         } catch (error) {
//             console.error('Error approving supplier:', error);
//         }
//     };

//     // Reject Supplier
//     const rejectSupplier = async (id) => {
//         try {
//             await axios.put('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/reject-supplier/${ id }');
//             setSupplierRequests(supplierRequests.filter(request => request._id !== id));
//         } catch (error) {
//             console.error('Error rejecting supplier:', error);
//         }
//     };

//     // Approve Wholesaler
//     const approveWholesaler = async (id) => {
//         try {
//             await axios.put('${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/approve-wholesaler/${ id }');
//             setWholesalerRequests(wholesalerRequests.filter(request => request._id !== id));
//         } catch (error) {
//             console.error('Error approving wholesaler:', error);
//         }
//     };

//     // Reject Wholesaler
//     const rejectWholesaler = async (id) => {
//         try {
//             await axios.put('localhost:5000/api/register-request/reject-wholesaler/${ id }');
//             setWholesalerRequests(wholesalerRequests.filter(request => request._id !== id));
//         } catch (error) {
//             console.error('Error rejecting wholesaler:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Users Management</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user._id}>
//                                 <td>{user.username}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.role}</td>
//                                 <td>
//                                     {user.role !== 'admin' && (
//                                         <>
//                                             <button onClick={() => openUpdateForm(user)} className="btn btn-primary">Update</button>
//                                             <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger ml-2">Delete</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}

//             {/* Update form */}
//             {selectedUser && (
//                 <div className="mt-4">
//                     <h3>Update Role for {selectedUser.username}</h3>
//                     <div className="form-group">
//                         <label>New Role</label>
//                         <select 
//                             className="form-control" 
//                             value={newRole} 
//                             onChange={(e) => setNewRole(e.target.value)}
//                         >
//                             <option value="user">user</option>
                            
//                             <option value="admin">admin</option>
//                         </select>
//                     </div>
//                     <button onClick={handleUpdateRole} className="btn btn-success mt-2">Save</button>
//                     <button onClick={() => setSelectedUser(null)} className="btn btn-secondary mt-2 ml-2">Cancel</button>
//                 </div>
//             )}

// <div>
//             <h3>Supplier Requests</h3>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Business Name</th>
//                         <th>Address</th>
//                         <th>Business Proof</th>
//                         <th>Store Image</th>
//                         <th>Bank Account Info</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {supplierRequests.map(request => (
//                         <tr key={request._id}>
//                             <td>{request.username}</td>
//                             <td>{request.businessName}</td>
//                             <td>{request.address}</td>
//                             <td><a href={request.businessProof} target="_blank" rel="noopener noreferrer">View</a></td>
//                             <td><a href={request.storeImage} target="_blank" rel="noopener noreferrer">View</a></td>
//                             <td>{request.bankAccountInfo}</td>
//                             <td>{request.email}</td>
//                             <td>
//                                 <button onClick={() => approveSupplier(request._id)} className="btn btn-success">Approve</button>
//                                 <button onClick={() => rejectSupplier(request._id)} className="btn btn-danger ml-2">Reject</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h3>Wholesaler Requests</h3>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Business Name</th>
//                         <th>Address</th>
//                         <th>Business Proof</th>
//                         <th>Store Image</th>
//                         <th>Bank Account Info</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {wholesalerRequests.map(request => (
//                         <tr key={request._id}>
//                             <td>{request.username}</td>
//                             <td>{request.businessName}</td>
//                             <td>{request.address}</td>
//                             <td><a href={request.businessProof} target="_blank" rel="noopener noreferrer">View</a></td>
//                             <td><a href={request.storeImage} target="_blank" rel="noopener noreferrer">View</a></td>
//                             <td>{request.bankAccountInfo}</td>
//                             <td>{request.email}</td>
//                             <td>
//                                 <button onClick={() => approveWholesaler(request._id)} className="btn btn-success">Approve</button>
//                                 <button onClick={() => rejectWholesaler(request._id)} className="btn btn-danger ml-2">Reject</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </div>
//     );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users');
//                 setUsers(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div>
//             <h2>Users Management</h2>
//             {loading ? <p>Loading...</p> : (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user._id}>
//                                 <td>{user.username}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.role}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Users; // Default export`

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
    IconButton, Typography, Button, Pagination, Select, MenuItem, InputAdornment
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import FilterListIcon from '@mui/icons-material/FilterList';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newRole, setNewRole] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users`);
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleUpdateRole = async () => {
        if (selectedUser) {
            try {
                await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/admin/users/${selectedUser._id}`, {
                    role: newRole
                });
                setUsers(users.map(user => user._id === selectedUser._id ? { ...user, role: newRole } : user));
                setSelectedUser(null);
                setNewRole('');
            } catch (error) {
                console.error('Error updating role:', error);
            }
        }
    };

    // Filter users based on search and role filter
    const filteredUsers = users.filter(user =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (roleFilter ? user.role === roleFilter : true)
    );

    // Paginate users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
                Users Management
            </Typography>

            {/* Search and Filter */}
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
                <Select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    displayEmpty
                    variant="outlined"
                    style={{ backgroundColor: '#ECCEAE', borderRadius: '15px' }}
                >
                    <MenuItem value="">All Roles</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                </Select>
            </div>

            {/* Users Table */}
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#131842' }}>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Username</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Role</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentUsers.map(user => (
                                <TableRow key={user._id} sx={{
                                    '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
                                    '&:hover': { backgroundColor: '#E68369' }
                                }}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        {user.role !== 'admin' ? (
                                            <Select
                                                value={user._id === selectedUser?._id ? newRole : user.role}
                                                onChange={(e) => {
                                                    setSelectedUser(user);
                                                    setNewRole(e.target.value);
                                                }}
                                                variant="standard"
                                                sx={{ minWidth: '80px' }}
                                            >
                                                <MenuItem value="user">User</MenuItem>
                                                <MenuItem value="admin">Admin</MenuItem>
                                            </Select>
                                        ) : (
                                            user.role
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {user.role !== 'admin' && (
                                            <>
                                                <IconButton onClick={handleUpdateRole} sx={{ color: '#131842' }}>
                                                    <SaveIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDeleteUser(user._id)} sx={{ color: '#131842' }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </>
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
                    count={Math.ceil(filteredUsers.length / usersPerPage)}
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
    );
};

export default UserManagement;
