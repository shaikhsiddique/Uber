import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const CaptianProtectedWrapper = ({ children }) => {
    const { setUser } = useContext(UserDataContext);
    const { isLoading, setIsLoading } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
   
    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                navigate("/login");
                return;
            }
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/user/profile`,
                    {
                        withCredentials: true,
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setUser(response.data.captian);
                setIsLoading(false);
            } catch (error) {
                localStorage.removeItem("token");
                navigate("/login");
            }
        };
        fetchData();
    }, [token, navigate, setUser, setIsLoading]);

    if (isLoading) {
        return <h3>Loading..</h3>;
    }

    return <>{children}</>;
};

export default CaptianProtectedWrapper;
