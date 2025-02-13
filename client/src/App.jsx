import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import Products from './pages/ProductsPage';
//import Profile from './pages/ProfilePage';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './context/ProtectedRoute';

const App = () => {
  return (
    <div>
      <ToastContainer />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path='/products' element={<Products/>}/>

        {/* Protected routes */}
        
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        
        

      </Routes>
    </div>
  );
};

export default App;
