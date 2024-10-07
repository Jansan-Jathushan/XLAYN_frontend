import { Route , Navigate} from 'react-router-dom';
import AdminLayout from './AdminLayout'; // Don't forget to import AdminLayout
import AdminDashboard from './AdminDashboard';
// import Users from './Users';
// import Suppliers from './Suppliers';
// import Wholesalers from './Wholesalers';
// import AddProduct from './AddProduct';
// import ProductRequests from './ProductRequests';
// import ProductList from './ProductList';
// import OrderRequests from './OrderRequests';
// import ApprovedOrders from './ApprovedOrders';
// import RejectedOrders from './RejectedOrders';
// import PaymentManagement from './PaymentManagement';
// import PendingDelivery from './PendingDelivery';
// import SuccessfulDelivery from './SuccessfulDelivery';
// import FeedbackRating from './FeedbackRating';
// import CustomerRequests from './CustomerRequests';

const AdminMain = (isAdmin) => {
    return (
        <Route path="/admin" element={isAdmin ? <AdminLayout /> : <Navigate to="/" />}>
            <Route index eleRedirectment={<AdminDashboard />} />
            {/* <Route path="users" element={<Users />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="wholesalers" element={<Wholesalers />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-requests" element={<ProductRequests />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="order-requests" element={<OrderRequests />} />
            <Route path="approved-orders" element={<ApprovedOrders />} />
            <Route path="rejected-orders" element={<RejectedOrders />} />
            <Route path="payment-management" element={<PaymentManagement />} />
            <Route path="pending-delivery" element={<PendingDelivery />} />
            <Route path="successful-delivery" element={<SuccessfulDelivery />} />
            <Route path="feedback-rating" element={<FeedbackRating />} />
            <Route path="customer-requests" element={<CustomerRequests />} /> */}
        </Route>
    );
};

export default AdminMain;
