import React from 'react';
import { FaBox, FaClipboardList, FaTags, FaUsers } from 'react-icons/fa';

const Overview = () => {
  return (
    <div className="ml-64 px-8 py-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Products</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <FaTags className="text-blue-500 w-10 h-10" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Orders</h3>
              <p className="text-2xl font-bold">76</p>
            </div>
            <FaClipboardList className="text-green-500 w-10 h-10" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Customers</h3>
              <p className="text-2xl font-bold">54</p>
            </div>
            <FaUsers className="text-yellow-500 w-10 h-10" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Pending Shipments</h3>
              <p className="text-2xl font-bold">14</p>
            </div>
            <FaBox className="text-red-500 w-10 h-10" />
          </div>
        </div>
      </div>
      
      {/* Recent Orders Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-4 py-2">#1023</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">Product A</td>
                <td className="px-4 py-2 text-green-500">Shipped</td>
                <td className="px-4 py-2">$120.00</td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2">#1024</td>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">Product B</td>
                <td className="px-4 py-2 text-yellow-500">Pending</td>
                <td className="px-4 py-2">$85.00</td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2">#1025</td>
                <td className="px-4 py-2">Chris Lee</td>
                <td className="px-4 py-2">Product C</td>
                <td className="px-4 py-2 text-red-500">Canceled</td>
                <td className="px-4 py-2">$45.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
