import React, { useEffect, useState, useContext } from 'react';
import { FaTags, FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const Products = () => {
  const { backendUrl, userData } = useContext(AppContext); // Get backendUrl and userData from context
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all products related to the logged-in user
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (userData && userData.id) {
          setIsLoading(true);
          const { data } = await axios.get(`${backendUrl}/api/products?supplier=${userData.id}`);
          setIsLoading(false);
          if (data.success) {
            setProducts(data.products);
          } else {
            toast.error(data.message);
          }
        }
      } catch (error) {
        setIsLoading(false);
        toast.error('Failed to fetch products');
        console.error(error);
      }
    };

    fetchProducts();
  }, [backendUrl, userData]);

  // Handle delete confirmation
  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      // Call delete API (add the delete logic here)
      toast.success('Product deleted successfully');
    }
  };

  return (
    <div className="ml-64 px-8 py-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Products</h2>
        
        {/* Add Product Button */}
        <Link to="/add-product">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">
            Add Product
          </button>
        </Link>
      </div>

      {/* Products List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {isLoading ? (
          <p className="text-center">Loading products...</p>
        ) : products.length > 0 ? (
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="text-center">
                  <td className="px-4 py-2">{product._id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.category}</td>
                  <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{product.quantity}</td>
                  <td className="px-4 py-2">
                    <button className="text-blue-500 hover:text-blue-600">
                      <FaEye className="inline-block w-5 h-5" />
                    </button>
                    <Link to={`/edit-product/${product._id}`}>
                      <button className="text-yellow-500 hover:text-yellow-600 ml-2">
                        <FaEdit className="inline-block w-5 h-5" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="text-red-500 hover:text-red-600 ml-2"
                    >
                      <FaTrashAlt className="inline-block w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
