'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const cookies = parseCookies();
        const storedAccessToken = cookies?.access_token;
        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        }
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (!accessToken) {
                    // If access token doesn't exist, do nothing
                    return;
                }

                const apiUrl = process.env.API_URL;

                // Fetch user data using access token
                const authenticatedResponse = await axios.get(`${apiUrl}/user`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (authenticatedResponse.status === 200) {
                    // Save user data to state
                    setUserData(authenticatedResponse.data);
                } else {
                    // Handle error response
                    console.error('Request failed');
                }
            } catch (error) {
                // Handle error
                console.error('Request failed:', error.message);
            }
        };

        fetchUserData();
    }, [accessToken]); // Fetch user data whenever access token changes


    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

// Usage in your components remains the same as mentioned in the previous response
