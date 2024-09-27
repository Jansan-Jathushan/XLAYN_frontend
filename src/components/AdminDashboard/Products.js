// // Products.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('/api/admin/products');
//                 setProducts(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//         fetchProducts();
//     }, []);

//     const handleDeleteProduct = async (productId) => {
//         try {
//             await axios.delete(`/api/admin/products/${productId}`);
//             setProducts(products.filter(product => product._id !== productId)); // Update UI after delete
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Products Management</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Type</th>
//                             <th>Image</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map(product => (
//                             <tr key={product._id}>
//                                 <td>{product.name}</td>
//                                 <td>{product.type}</td>
//                                 <td>
//                                     <img src={product.image} alt={product.name} width="50" />
//                                 </td>
//                                 <td>
//                                     <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger">Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Products;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newProduct, setNewProduct] = useState({ name: '', type: '', image: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products/view');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/products/create', newProduct);
            setProducts([...products, response.data]); // Add new product to the UI
            setNewProduct({ name: '', type: '', image: '' }); // Reset form fields
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleUpdateProduct = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/products/update/${selectedProduct._id}`, selectedProduct);
            setProducts(products.map(product => product._id === selectedProduct._id ? response.data : product));
            setSelectedProduct(null); // Close the update form
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/delete/${productId}`);
            setProducts(products.filter(product => product._id !== productId)); // Update UI after delete
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const openUpdateForm = (product) => {
        setSelectedProduct(product); // Open the update form with selected product
    };

    return (
        <div>
            <h2>Products Management</h2>
            
            {/* Add Product Form */}
            <div>
                <h3>Add New Product</h3>
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={newProduct.name} 
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Product Type" 
                    value={newProduct.type} 
                    onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Product Image URL" 
                    value={newProduct.image} 
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
                <button onClick={handleAddProduct} className="btn btn-success">Add Product</button>
            </div>

            {/* Product List */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.type}</td>
                                <td>
                                    <img src={product.image} alt={product.name} width="50" />
                                </td>
                                <td>
                                    <button onClick={() => openUpdateForm(product)} className="btn btn-primary">Update</button>
                                    <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Update Product Form */}
            {selectedProduct && (
                <div className="mt-4">
                    <h3>Update Product: {selectedProduct.name}</h3>
                    <input 
                        type="text" 
                        placeholder="Product Name" 
                        value={selectedProduct.name} 
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                    />
                    <input 
                        type="text" 
                        placeholder="Product Type" 
                        value={selectedProduct.type} 
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, type: e.target.value })}
                    />
                    <input 
                        type="text" 
                        placeholder="Product Image URL" 
                        value={selectedProduct.image} 
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.value })}
                    />
                    <button onClick={handleUpdateProduct} className="btn btn-success">Save</button>
                    <button onClick={() => setSelectedProduct(null)} className="btn btn-secondary ml-2">Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Products;
