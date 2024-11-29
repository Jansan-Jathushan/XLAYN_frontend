


// import React, { useState, useEffect } from 'react';
// import { Line, Pie, Bar } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     BarElement,
//     ArcElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler,
// } from 'chart.js';
// import { Card, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// // Register all necessary Chart.js components
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     BarElement,
//     ArcElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler
// );

// const AdminDashboard = () => {
//     const [profile, setProfile] = useState(null);
//     const [userCount, setUserCount] = useState(0);
//     const [approvedProducts, setApprovedProducts] = useState(0);
//     const [rejectedProducts, setRejectedProducts] = useState(0);
//     const [pendingProducts, setPendingProducts] = useState(0);
//     const [addedProducts, setAddedProducts] = useState(0);
//     const [supplierRequests, setSupplierRequests] = useState(0);
//     const [approvedSuppliers, setApprovedSuppliers] = useState(0);
//     const [rejectedSuppliers, setRejectedSuppliers] = useState(0);
//     const [wholesalerRequests, setWholesalerRequests] = useState(0);
//     const [approvedWholesalers, setApprovedWholesalers] = useState(0);
//     const [rejectedWholesalers, setRejectedWholesalers] = useState(0);
//     const [contactMessages, setContactMessages] = useState([]);
//     const [orders, setOrders] = useState([]);
//     const userId = localStorage.getItem('id'); // Retrieve user ID from localStorage

//     useEffect(() => {
//         // Fetching all necessary data
//         const fetchData = async () => {
//             try {
//                 const responses = await Promise.all([
//                     fetch(`http://localhost:5000/api/users/profile/${userId}`).then((res) => res.json()),
//                     fetch('http://localhost:5000/api/users/allProfile').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/product/admin/products/approved').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/product/admin/products/rejected').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/product/admin/products/pending').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/product/admin/get-products').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/register-request/supplier-requests').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/register-request/approved-suppliers').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/register-request/rejected-suppliers').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/register-request/wholesaler-requests').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/register-request/approved-wholesalers').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/register-request/rejected-wholesalers').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/contact/contact-us').then((res) => res.json()),
//                     fetch('http://localhost:5000/api/order-pay/ordersget').then((res) => res.json()),
//                 ]);

//                 setProfile(responses[0]);
//                 setUserCount(responses[1].length);
//                 setApprovedProducts(responses[2].length);
//                 setRejectedProducts(responses[3].length);
//                 setPendingProducts(responses[4].length);
//                 setAddedProducts(responses[5].length);
//                 setSupplierRequests(responses[6].length);
//                 setApprovedSuppliers(responses[7].length);
//                 setRejectedSuppliers(responses[8].length);
//                 setWholesalerRequests(responses[9].length);
//                 setApprovedWholesalers(responses[10].length);
//                 setRejectedWholesalers(responses[11].length);
//                 setContactMessages(responses[12].slice(0, 5));
//                 setOrders(responses[13].slice(0, 5));
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [userId]);

//     // Chart Data
//     const lineChartData = {
//         labels: ['Users', 'Approved', 'Rejected', 'Pending', 'Added'],
//         datasets: [
//             {
//                 label: 'Products & Users',
//                 data: [userCount, approvedProducts, rejectedProducts, pendingProducts, addedProducts],
//                 borderColor: '#E68369',
//                 backgroundColor: '#ECCEAE',
//                 tension: 0.4,
//                 fill: true,
//             },
//         ],
//     };

//     const pieChartData = {
//         labels: ['Approved Suppliers', 'Rejected Suppliers', 'Pending Suppliers'],
//         datasets: [
//             {
//                 label: 'Suppliers',
//                 data: [approvedSuppliers, rejectedSuppliers, supplierRequests - (approvedSuppliers + rejectedSuppliers)],
//                 backgroundColor: ['#E68369', '#FBF6E2', '#ECCEAE'],
//             },
//         ],
//     };

//     const barChartData = {
//         labels: ['Wholesalers', 'Approved', 'Rejected'],
//         datasets: [
//             {
//                 label: 'Wholesalers',
//                 data: [wholesalerRequests, approvedWholesalers, rejectedWholesalers],
//                 backgroundColor: ['#E68369', '#ECCEAE', '#FBF6E2'],
//             },
//         ],
//     };

//     return (
//         <div style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
//             <Card style={{ flex: 1, padding: '20px', backgroundColor: '#FBF6E2' }}>
//                 <Typography variant="h6">Admin Profile</Typography>
//                 {profile && (
//                     <>
//                         <img src={profile.avatar} alt="Admin" style={{ borderRadius: '50%', width: '100px' }} />
//                         <Typography>{profile.name}</Typography>
//                         <Typography>{profile.email}</Typography>
//                     </>
//                 )}
//             </Card>
//             <Card style={{ flex: 2, padding: '20px' }}>
//                 <Typography variant="h6">Products & Users</Typography>
//                 <Line data={lineChartData} />
//             </Card>
//             <Card style={{ flex: 1, padding: '20px' }}>
//                 <Typography variant="h6">Suppliers</Typography>
//                 <Pie data={pieChartData} />
//             </Card>
//             <Card style={{ flex: 1, padding: '20px' }}>
//                 <Typography variant="h6">Wholesalers</Typography>
//                 <Bar data={barChartData} />
//             </Card>
//         </div>
//     );
// };

// export default AdminDashboard;




// import React from "react";
// import { Bar, Doughnut, Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// // Register necessary Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend);

// const AdminDashboard = () => {
//   // Data for charts
//   const barData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
//     datasets: [
//       {
//         label: "Monthly Revenue",
//         data: [12, 19, 3, 5, 2, 3, 7, 8, 6],
//         backgroundColor: "#E68369",
//         borderColor: "#131842",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const doughnutData = {
//     labels: ["Desktop", "Tablet", "Mobile"],
//     datasets: [
//       {
//         label: "Device Type",
//         data: [35, 48, 27],
//         backgroundColor: ["#131842", "#E68369", "#ECCEAE"],
//         borderColor: "#FBF6E2",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const lineData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Views",
//         data: [65, 59, 80, 81, 56, 55],
//         borderColor: "#E68369",
//         backgroundColor: "rgba(230, 131, 105, 0.2)",
//         borderWidth: 2,
//         tension: 0.4,
//       },
//     ],
//   };

//   return (
//     <div style={{ backgroundColor: "#131842", color: "#FBF6E2", padding: "20px" }}>
//       {/* Welcome Section */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           <h2 style={{ margin: "0", color: "#FBF6E2" }}>Welcome back, Admin!</h2>
//           <p>Here's an overview of your platform's performance.</p>
//         </div>
//         <div style={{ display: "flex", gap: "20px" }}>
//           <div
//             style={{
//               padding: "15px",
//               borderRadius: "8px",
//               textAlign: "center",
//               backgroundColor: "#E68369",
//               color: "#131842",
//               fontWeight: "bold",
//             }}
//           >
//             <h3>$65.4K</h3>
//             <p>Today's Sales</p>
//           </div>
//           <div
//             style={{
//               padding: "15px",
//               borderRadius: "8px",
//               textAlign: "center",
//               backgroundColor: "#ECCEAE",
//               color: "#131842",
//               fontWeight: "bold",
//             }}
//           >
//             <h3>78.4%</h3>
//             <p>Growth Rate</p>
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
//         <div
//           style={{
//             padding: "15px",
//             borderRadius: "8px",
//             textAlign: "center",
//             backgroundColor: "#E68369",
//             color: "#131842",
//             fontWeight: "bold",
//           }}
//         >
//           <h3>42.5K</h3>
//           <p>Active Users</p>
//         </div>
//         <div
//           style={{
//             padding: "15px",
//             borderRadius: "8px",
//             textAlign: "center",
//             backgroundColor: "#ECCEAE",
//             color: "#131842",
//             fontWeight: "bold",
//           }}
//         >
//           <h3>97.4K</h3>
//           <p>Total Users</p>
//         </div>
//         <div
//           style={{
//             padding: "15px",
//             borderRadius: "8px",
//             textAlign: "center",
//             backgroundColor: "#E68369",
//             color: "#131842",
//             fontWeight: "bold",
//           }}
//         >
//           <h3>82.7K</h3>
//           <p>Total Clicks</p>
//         </div>
//         <div
//           style={{
//             padding: "15px",
//             borderRadius: "8px",
//             textAlign: "center",
//             backgroundColor: "#ECCEAE",
//             color: "#131842",
//             fontWeight: "bold",
//           }}
//         >
//           <h3>68.4K</h3>
//           <p>Total Views</p>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
//         <div
//           style={{
//             padding: "20px",
//             borderRadius: "8px",
//             backgroundColor: "#FBF6E2",
//             color: "#131842",
//           }}
//         >
//           <h3>Monthly Revenue</h3>
//           <Bar data={barData} />
//         </div>
//         <div
//           style={{
//             padding: "20px",
//             borderRadius: "8px",
//             backgroundColor: "#FBF6E2",
//             color: "#131842",
//           }}
//         >
//           <h3>Device Type</h3>
//           <Doughnut data={doughnutData} />
//         </div>
//         <div
//           style={{
//             padding: "20px",
//             borderRadius: "8px",
//             backgroundColor: "#FBF6E2",
//             color: "#131842",
//           }}
//         >
//           <h3>Total Views Over Time</h3>
//           <Line data={lineData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import { 
//   Line, 
//   LineChart, 
//   PieChart, 
//   Pie, 
//   ResponsiveContainer,
//   Tooltip,
//   Legend,
//   Cell
// } from 'recharts';
// import { User, Package, Users, MessageSquare } from 'lucide-react';

// // Custom Card Components remain the same...
// const Card = ({ children, className = '' }) => (
//   <div className={`bg-white rounded-lg shadow-md ${className}`}>
//     {children}
//   </div>
// );

// const CardHeader = ({ children }) => (
//   <div className="p-4 border-b border-gray-200">
//     {children}
//   </div>
// );

// const CardTitle = ({ children }) => (
//   <h3 className="text-lg font-semibold text-gray-800">
//     {children}
//   </h3>
// );

// const CardContent = ({ children, className = '' }) => (
//   <div className={`p-4 ${className}`}>
//     {children}
//   </div>
// );

// const AdminDashboard = () => {
//   // State declarations remain the same...
//   const [profileData, setProfileData] = useState(null);
//   const [stats, setStats] = useState({
//     products: { approved: 0, rejected: 0, pending: 0, total: 0 },
//     suppliers: { requests: 0, approved: 0, rejected: 0 },
//     wholesalers: { requests: 0, approved: 0, rejected: 0 },
//     contacts: [],
//     orders: []
//   });

//   const colors = {
//     primary: '#131842',
//     secondary: '#E68369',
//     tertiary: '#ECCEAE',
//     background: '#FBF6E2'
//   };

//   // useEffect and fetchData remain the same...
//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     fetchData(userId);
//   }, []);

//   const fetchData = async (userId) => {
//     try {
//       const responses = await Promise.all([
//         fetch(`/api/users/profile/${userId}`),
//         fetch('/api/users/allProfile'),
//         fetch('/api/product/admin/products/approved'),
//         fetch('/api/product/admin/products/rejected'),
//         fetch('/api/product/admin/products/pending'),
//         fetch('/api/register-request/supplier-requests'),
//         fetch('/api/register-request/approved-suppliers'),
//         fetch('/api/register-request/rejected-suppliers'),
//         fetch('/api/register-request/wholesaler-requests'),
//         fetch('/api/register-request/approved-wholesalers'),
//         fetch('/api/register-request/rejected-wholesalers'),
//         fetch('/api/contact/contact-us'),
//         fetch('/api/order-pay/ordersget')
//       ]);

//       const [
//         profile,
//         allUsers,
//         approvedProducts,
//         rejectedProducts,
//         pendingProducts,
//         supplierRequests,
//         approvedSuppliers,
//         rejectedSuppliers,
//         wholesalerRequests,
//         approvedWholesalers,
//         rejectedWholesalers,
//         contacts,
//         orders
//       ] = await Promise.all(responses.map(r => r.json()));

//       setProfileData(profile);
//       setStats({
//         products: {
//           approved: approvedProducts.length,
//           rejected: rejectedProducts.length,
//           pending: pendingProducts.length,
//           total: approvedProducts.length + rejectedProducts.length + pendingProducts.length
//         },
//         suppliers: {
//           requests: supplierRequests.length,
//           approved: approvedSuppliers.length,
//           rejected: rejectedSuppliers.length
//         },
//         wholesalers: {
//           requests: wholesalerRequests.length,
//           approved: approvedWholesalers.length,
//           rejected: rejectedWholesalers.length
//         },
//         contacts: contacts.slice(-5),
//         orders: orders.slice(-5)
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Prepare data for PieChart
//   const productData = [
//     { name: 'Approved', value: stats.products.approved },
//     { name: 'Rejected', value: stats.products.rejected },
//     { name: 'Pending', value: stats.products.pending }
//   ];

//   // Prepare data for LineChart
//   const registrationData = [
//     { name: 'Suppliers', requests: stats.suppliers.requests, approved: stats.suppliers.approved },
//     { name: 'Wholesalers', requests: stats.wholesalers.requests, approved: stats.wholesalers.approved }
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="flex items-center gap-4 mb-6">
//         <div className="w-12 h-12 rounded-full bg-gray-300" />
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">
//             Welcome back, {profileData?.name || 'Admin'}!
//           </h1>
//           <p className="text-gray-600">Dashboard Overview</p>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <Card>
//           <CardContent>
//             <div className="flex items-center gap-4">
//               <Package className="w-8 h-8" style={{ color: colors.secondary }} />
//               <div>
//                 <p className="text-sm text-gray-600">Total Products</p>
//                 <h3 className="text-2xl font-bold">{stats.products.total}</h3>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent>
//             <div className="flex items-center gap-4">
//               <Users className="w-8 h-8" style={{ color: colors.primary }} />
//               <div>
//                 <p className="text-sm text-gray-600">Total Suppliers</p>
//                 <h3 className="text-2xl font-bold">{stats.suppliers.approved}</h3>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent>
//             <div className="flex items-center gap-4">
//               <Users className="w-8 h-8" style={{ color: colors.tertiary }} />
//               <div>
//                 <p className="text-sm text-gray-600">Total Wholesalers</p>
//                 <h3 className="text-2xl font-bold">{stats.wholesalers.approved}</h3>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent>
//             <div className="flex items-center gap-4">
//               <MessageSquare className="w-8 h-8" style={{ color: colors.secondary }} />
//               <div>
//                 <p className="text-sm text-gray-600">New Messages</p>
//                 <h3 className="text-2xl font-bold">{stats.contacts.length}</h3>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Products Overview</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={productData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={80}
//                   paddingAngle={5}
//                   dataKey="value"
//                 >
//                   {productData.map((entry, index) => (
//                     <Cell 
//                       key={`cell-${index}`} 
//                       fill={[colors.primary, colors.secondary, colors.tertiary][index]}
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Registration Requests</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={registrationData}>
//                 <Line 
//                   type="monotone" 
//                   dataKey="requests" 
//                   stroke={colors.primary} 
//                   strokeWidth={2}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="approved" 
//                   stroke={colors.secondary} 
//                   strokeWidth={2}
//                 />
//                 <Tooltip />
//                 <Legend />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Tables Grid - Remains the same... */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Orders</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50">
//                     <th className="text-left p-2 border-b">Order ID</th>
//                     <th className="text-left p-2 border-b">Customer</th>
//                     <th className="text-left p-2 border-b">Status</th>
//                     <th className="text-right p-2 border-b">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {stats.orders.map((order, index) => (
//                     <tr key={index} className="border-b hover:bg-gray-50">
//                       <td className="p-2">{order.id}</td>
//                       <td className="p-2">{order.customer}</td>
//                       <td className="p-2">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           order.status === 'completed' ? 'bg-green-100 text-green-800' :
//                           order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-gray-100 text-gray-800'
//                         }`}>
//                           {order.status}
//                         </span>
//                       </td>
//                       <td className="p-2 text-right">${order.amount}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Messages</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50">
//                     <th className="text-left p-2 border-b">Name</th>
//                     <th className="text-left p-2 border-b">Subject</th>
//                     <th className="text-left p-2 border-b">Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {stats.contacts.map((contact, index) => (
//                     <tr key={index} className="border-b hover:bg-gray-50">
//                       <td className="p-2">{contact.name}</td>
//                       <td className="p-2">{contact.subject}</td>
//                       <td className="p-2">{new Date(contact.date).toLocaleDateString()}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


'use client'

import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Doughnut, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const BASE_URL = 'http://localhost:5000/api';

async function fetchWithAuth(endpoint) {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export default function Dashboard() {
  const [adminProfile, setAdminProfile] = useState(null)
  const [stats, setStats] = useState({
    products: { approved: 0, rejected: 0, pending: 0, total: 0 },
    suppliers: { requests: 0, approved: 0, rejected: 0 },
    wholesalers: { requests: 0, approved: 0, rejected: 0 },
  })
  const [recentContacts, setRecentContacts] = useState([])
  const [recentOrders, setRecentOrders] = useState([])

  useEffect(() => {
    const userId = localStorage.getItem('id')
    if (!userId) return

    const fetchDashboardData = async () => {
      try {
        const [
          profileData,
          approvedProducts,
          rejectedProducts,
          pendingProducts,
          totalProducts,
          supplierRequests,
          approvedSuppliers,
          rejectedSuppliers,
          wholesalerRequests,
          approvedWholesalers,
          rejectedWholesalers,
          contacts,
          orders,
        ] = await Promise.all([
          fetchWithAuth(`/users/profile/${userId}`),
          fetchWithAuth('/product/admin/products/approved'),
          fetchWithAuth('/product/admin/products/rejected'),
          fetchWithAuth('/product/admin/products/pending'),
          fetchWithAuth('/product/admin/get-products'),
          fetchWithAuth('/register-request/supplier-requests'),
          fetchWithAuth('/register-request/approved-suppliers'),
          fetchWithAuth('/register-request/rejected-suppliers'),
          fetchWithAuth('/register-request/wholesaler-requests'),
          fetchWithAuth('/register-request/approved-wholesalers'),
          fetchWithAuth('/register-request/rejected-wholesalers'),
          fetchWithAuth('/contact/contact-us'),
          fetchWithAuth('/order-pay/ordersget'),
        ])

        setAdminProfile(profileData)
        setStats({
          products: {
            approved: approvedProducts.length,
            rejected: rejectedProducts.length,
            pending: pendingProducts.length,
            total: totalProducts.length,
          },
          suppliers: {
            requests: supplierRequests.length,
            approved: approvedSuppliers.length,
            rejected: rejectedSuppliers.length,
          },
          wholesalers: {
            requests: wholesalerRequests.length,
            approved: approvedWholesalers.length,
            rejected: rejectedWholesalers.length,
          },
        })
        setRecentContacts(contacts.slice(-5))
        setRecentOrders(orders.slice(-5))
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    fetchDashboardData()
  }, [])

  const chartColors = {
    primary: '#131842',
    secondary: '#E68369',
    tertiary: '#ECCEAE',
    background: '#FBF6E2',
  }

  const productChartData = {
    labels: ['Approved', 'Rejected', 'Pending', 'Total'],
    datasets: [
      {
        data: [
          stats.products.approved,
          stats.products.rejected,
          stats.products.pending,
          stats.products.total,
        ],
        backgroundColor: [
          chartColors.primary,
          chartColors.secondary,
          chartColors.tertiary,
          chartColors.background,
        ],
      },
    ],
  }

  const supplierChartData = {
    labels: ['Requests', 'Approved', 'Rejected'],
    datasets: [
      {
        data: [
          stats.suppliers.requests,
          stats.suppliers.approved,
          stats.suppliers.rejected,
        ],
        backgroundColor: [chartColors.background, chartColors.secondary, chartColors.tertiary],
      },
    ],
  }

  const wholesalerChartData = {
    labels: ['Requests', 'Approved', 'Rejected'],
    datasets: [
      {
        data: [
          stats.wholesalers.requests,
          stats.wholesalers.approved,
          stats.wholesalers.rejected,
        ],
        backgroundColor: [chartColors.background, chartColors.secondary, chartColors.tertiary],
      },
    ],
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#131842', color: 'white', padding: '1.5rem', borderRadius: '50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Admin Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: '#E68369', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>{adminProfile?.username?.[0] || 'A'}</span>
          </div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Welcome back</h1>
            <p style={{ color: '#ECCEAE', fontSize: '1.25rem' }}>{adminProfile?.username || 'Admin'}!</p>
            <p style={{ color: '#ECCEAE', fontSize: '1.25rem' }}>{adminProfile?.email }</p>

          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Products Chart */}
          <div style={{ backgroundColor: 'rgba(19, 24, 66, 0.5)', border: '1px solid #E68369', borderRadius: '0.5rem', padding: '1rem' }}>
            <h2 style={{ color: '#ECCEAE', fontSize: '1.25rem', marginBottom: '1rem' }}>Products Overview</h2>
            <Doughnut
              data={productChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: { color: '#FBF6E2' },
                  },
                },
              }}
            />
          </div>

          {/* Suppliers Chart */}
          <div style={{ backgroundColor: 'rgba(19, 24, 66, 0.5)', border: '1px solid #E68369', borderRadius: '0.5rem', padding: '1rem' }}>
            <h2 style={{ color: '#ECCEAE', fontSize: '1.25rem', marginBottom: '1rem' }}>Suppliers Overview</h2>
            <Bar
              data={supplierChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: { ticks: { color: '#FBF6E2' } },
                  x: { ticks: { color: '#FBF6E2' } },
                },
              }}
            />
          </div>

          {/* Wholesalers Chart */}
          <div style={{ backgroundColor: 'rgba(19, 24, 66, 0.5)', border: '1px solid #E68369', borderRadius: '0.5rem', padding: '1rem' }}>
            <h2 style={{ color: '#ECCEAE', fontSize: '1.25rem', marginBottom: '1rem' }}>Wholesalers Overview</h2>
            <Bar
              data={wholesalerChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: { ticks: { color: '#FBF6E2' } },
                  x: { ticks: { color: '#FBF6E2' } },
                },
              }}
            />
          </div>
        </div>

        {/* Recent Tables */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Recent Contacts */}
          <div style={{ backgroundColor: 'rgba(19, 24, 66, 0.5)', border: '1px solid #E68369', borderRadius: '0.5rem', padding: '1rem' }}>
            <h2 style={{ color: '#ECCEAE', fontSize: '1.25rem', marginBottom: '1rem' }}>Recent Contacts</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ color: '#ECCEAE', textAlign: 'left', padding: '0.5rem' }}>Name</th>
                  <th style={{ color: '#ECCEAE', textAlign: 'left', padding: '0.5rem' }}>Email</th>
                  <th style={{ color: '#ECCEAE', textAlign: 'left', padding: '0.5rem' }}>Message</th>
                </tr>
              </thead>
              <tbody>
                {recentContacts.map((contact, index) => (
                  <tr key={index}>
                    <td style={{ color: 'white', padding: '0.5rem' }}>{contact.name}</td>
                    <td style={{ color: 'white', padding: '0.5rem' }}>{contact.email}</td>
                    <td style={{ color: 'white', padding: '0.5rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {contact.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Orders */}
          <div style={{ backgroundColor: 'rgba(19, 24, 66, 0.5)', border: '1px solid #E68369', borderRadius: '0.5rem', padding: '1rem' }}>
            <h2 style={{ color: '#ECCEAE', fontSize: '1.25rem', marginBottom: '1rem' }}>Recent Orders</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ color: '#ECCEAE', textAlign: 'left', padding: '0.5rem' }}>Order ID</th>
                  <th style={{ color: '#ECCEAE', textAlign: 'left', padding: '0.5rem' }}>Customer</th>
                  <th style={{ color: '#ECCEAE', textAlign: 'left', padding: '0.5rem' }}>Amount</th>
                  <th style={{ color: '#ECCEAE', textAlign: 'left', padding: '0.5rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td style={{ color: 'white', padding: '0.5rem' }}>{order._id}</td>
                    <td style={{ color: 'white', padding: '0.5rem' }}>{order.userName}</td>
                    <td style={{ color: 'white', padding: '0.5rem' }}>${order.totalAmount}</td>
                    <td style={{ color: 'white', padding: '0.5rem' }}>{order.paymentStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}



