


// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import AdminLayout from './AdminLayout.js';
// import AdminDashboard from './AdminDashboard.js';
// import Users from './Users';

// // import Suppliers from './Suppliers';
// // import Wholesalers from './Wholesalers';
// // import AddProduct from './AddProduct';
// // import ProductRequests from './ProductRequests';
// // import ProductList from './ProductList';
// // import OrderRequests from './OrderRequests';
// // import ApprovedOrders from './ApprovedOrders';
// // import RejectedOrders from './RejectedOrders';
// // import PaymentManagement from './PaymentManagement';
// // import PendingDelivery from './PendingDelivery';
// // import SuccessfulDelivery from './SuccessfulDelivery';
// // import FeedbackRating from './FeedbackRating';
// // import CustomerRequests from './CustomerRequests';
// const AdminMain = () => {
//     return (
//         <AdminLayout>
//             <Routes>
//             <Route index element={<AdminDashboard />} />
//                 <Route path="/users" element={<Users />} />
//             {/* <Route path="suppliers" element={<Suppliers />} />
//             <Route path="wholesalers" element={<Wholesalers />} />
//             <Route path="add-product" element={<AddProduct />} />
//             <Route path="product-requests" element={<ProductRequests />} />
//             <Route path="product-list" element={<ProductList />} />
//             <Route path="order-requests" element={<OrderRequests />} />
//             <Route path="approved-orders" element={<ApprovedOrders />} />
//             <Route path="rejected-orders" element={<RejectedOrders />} />
//             <Route path="payment-management" element={<PaymentManagement />} />
//             <Route path="pending-delivery" element={<PendingDelivery />} />
//             <Route path="successful-delivery" element={<SuccessfulDelivery />} />
//             <Route path="feedback-rating" element={<FeedbackRating />} />
//             <Route path="customer-requests" element={<CustomerRequests />} /> */}
//             <Route path="*" element={<Navigate to="/admin" />} /> {/* Fallback for admin routes */}
//             </Routes>
//         </AdminLayout>
//     );
// };

// export default AdminMain;





import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout'; // Main Admin layout
import Users from './Users.js';
import Suppliers from './Supplier.js';
import Wholesalers from './Wholesaler.js';
import AddProduct from './AddProduct.js';
import Products from './Products.js';
import PendingProducts from './ProductRequests.js';
import ProductList from './ProductList.js';
import OrderList from'./OrdeList.js';
import ContactList from './ContactList.js';
export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Sub-routes within the Admin Dashboard */}
        <Route path="user-management" element={<Users />} />
        <Route path="supplier-management" element={<Suppliers />} />
        <Route path="wholesaler-management" element={<Wholesalers />} />
        <Route path="add-product" element={<Products />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="product-request" element={<PendingProducts />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="order-list" element={<OrderList />} />
        <Route path="customer-request" element={<ContactList />} />
      </Route>
    </Routes>
  );
}
