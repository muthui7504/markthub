import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const { backendUrl, userData, getUserData } = useContext(AppContext);
  const [supplierDetails, setSupplierDetails] = useState({
    phone: '',
    address: '',
    businessName: '',
  });

  // Load the user data when the component mounts
  useEffect(() => {
    if (userData) {
      setSupplierDetails({
        phone: userData.phone || '',
        address: userData.address || '',
        businessName: userData.businessName || '',
      });
    }
  }, [userData]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle profile update submission
  const handleSubmit = async () => {
    try {
      const { data } = await axios.put(`${backendUrl}/api/supplier/update`, supplierDetails);
      if (data.success) {
        toast.success('Profile updated successfully!');
        getUserData(); // Refresh user data after update
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to update profile');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mb-6 md:mb-0">
        {/* Profile Card */}
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 lg:p-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Profile Information</h3>

          {/* Non-editable fields */}
          <div className="mb-4">
            <strong className="block text-gray-600">Name:</strong>
            <p className="text-gray-800">{userData?.name || 'N/A'}</p>
          </div>

          <div className="mb-4">
            <strong className="block text-gray-600">Email:</strong>
            <p className="text-gray-800">{userData?.email || 'N/A'}</p>
          </div>

          {/* Editable fields */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="businessName">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={supplierDetails.businessName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your business name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={supplierDetails.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={supplierDetails.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your address"
            />
          </div>

          {/* Save button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
