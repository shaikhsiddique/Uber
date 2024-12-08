import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptianProtectedWrapper = ({ children }) => {
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const { isLoading, setIsLoading } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                navigate("/captian/login");
                return;
            }
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captian/profile`, 
                    {
                        withCredentials: true,
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setCaptain(response.data.captian);
                setIsLoading(false);
            } catch (error) {
                localStorage.removeItem("token");
                navigate("/captian/login");
              
            }
        };
        fetchData();
    }, [token, navigate, setCaptain, setIsLoading]);

    if (isLoading) {
        return <h3>Loading..</h3>;
    }

    return <>{children}</>;
};

export default CaptianProtectedWrapper;
