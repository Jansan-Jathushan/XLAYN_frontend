


// SupplierMain.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import SupplierLayout from './SupplierLayout';
// import AddProducts from '../SupplierDashboard/AddProducts'; 
// import PendingProducts from './PendingProducts';
// import ApprovedProducts from './ApprovedProducts';
// import RejectedProducts from './RejectedProducts';

// const SupplierMain = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SupplierLayout />}>
//         <Route path="add-product" element={<AddProducts />} />
//         <Route path="pending-products" element={<PendingProducts />} />
//         <Route path="approved-products" element={<ApprovedProducts />} />
//         <Route path="rejected-products" element={<RejectedProducts />} />
//       </Route>
//     </Routes>
//   );
// };

// export default SupplierMain;







import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SupplierLayout from './SupplierLayout';
import AddProducts from '../SupplierDashboard/AddProducts'; 
import PendingProducts from './PendingProducts';
import ProductLists from './ProductLists.js';
export default function SupplierRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SupplierLayout />}>
        <Route path="add-product" element={<AddProducts />} />
        <Route path="pending-product" element={<PendingProducts />} />
        <Route path="products-list" element={<ProductLists />} />
        
      </Route>
    </Routes>
  );
}
