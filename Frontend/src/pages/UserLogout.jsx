import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        if (isLoggingOut) return;
        setIsLoggingOut(true);
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                localStorage.removeItem("token");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    React.useEffect(() => {
        handleLogout();
    }, []);

    return <div>Logging you out...</div>;
}

export default UserLogout;
