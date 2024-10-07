// SupplierMain.js
import { Route, Navigate } from 'react-router-dom';
import SupplierLayout from './SupplierLayout'; // Import your SupplierLayout
import SupplierDashboard from './SupplierDashboard';
import AddProducts from './AddProducts';
import PendingProducts from './PendingProducts';
import ApprovedProducts from './ApprovedProducts';
import RejectedProducts from './RejectedProducts';

const SupplierMain = ({ isSupplier }) => {
    return (
        <Route path="/supplier" element={isSupplier ? <SupplierLayout /> : <Navigate to="/" />}>
            <Route index element={<SupplierDashboard />} />
            <Route path="add-product" element={<AddProducts />} />
            <Route path="pending-products" element={<PendingProducts />} />
            <Route path="approved-products" element={<ApprovedProducts />} />
            <Route path="rejected-products" element={<RejectedProducts />} />
        </Route>
    );
};

export default SupplierMain;
