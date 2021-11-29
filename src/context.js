import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://api.unsplash.com/search/photos?page=1&query=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('hair');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback(async () => {
        
        try {
            const response = await fetch(`${url}${searchTerm}&client_id=3RRiGqktwKf_CGLxO67dkU0YN3rPgmFqdKU4k5w_MIo`);
            const data = await response.json();

            const { results } = data;

            if (results) {
                const newCocktails = results.map((item) => {
                    const { user, links } = item;
                    const { location, last_name, profile_image } = user;
                    const { download } = links;
                    const { medium } = profile_image;

                    return {
                        location,
                        last_name,
                        download,
                        medium,
                    };
                });
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            
        } catch (error) {
            
        }
    }, [searchTerm]);
    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks]);
    return (
        <AppContext.Provider value={{  cocktails, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };