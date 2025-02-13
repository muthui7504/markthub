import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [productData, setProductData] = useState(null);

    // Check if user is authenticated
    const getAuthState = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/auth/is-auth');
            if (data.success) {
                setIsLoggedin(true);
                getUserData(); // Fetch user data after successful auth
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // Fetch user data
    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data');
            console.log("User Data Response:", data);
            data.success ? setUserData(data.userData) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    // Fetch product data
    const getProductData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/products');
            data.success ? setProductData(data.productData) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getAuthState();
    }, []); // Empty dependency array to run once on mount

    // Context value that will be provided to other components
    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        productData,
        getUserData,
        getProductData,
        getAuthState
    };

    console.log("Backend URL:", backendUrl);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
