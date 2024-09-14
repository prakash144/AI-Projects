// components/ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false); // Default to light mode

    const toggleTheme = () => {
        setDarkMode((prev) => {
            const newTheme = !prev; // Determine the new theme
            console.log("Toggling theme to:", newTheme ? 'dark' : 'light'); // Debug log
            return newTheme; // Return the new theme state
        });
    };

    return (
        <ThemeContext.Provider value={{ mode: darkMode ? 'dark' : 'light', toggleTheme }}>
            <div className={darkMode ? 'dark' : ''}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
