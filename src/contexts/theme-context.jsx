// Import necessary hooks and libraries from React

import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

// Initial state for the theme context
const initialState = {
    theme: "system",
    setTheme: () => null,
};

// create the ThemeProviderContext with the initial state

export const ThemeProviderContext = createContext(initialState);

// ThemeProvider component to provide the theme context to its children

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {

    // Get the theme from localStorage or use the default theme

    const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

    // Set the theme class on the root

    useEffect(() => {
      
      // Get the root element

        const root = window.document.documentElement;

        // Remove the existing theme classes

        root.classList.remove("light", "dark");

        if (theme === "system") {
          // Check the system theme and add the class to the root element
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);
    // Create the value object to provide to the context

    const value = {
        theme,
        setTheme: (theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };
    //  Export the ThemeProviderContext for use in other components

    return (
        <ThemeProviderContext.Provider
            {...props}
            value={value}
        >
            {children}
        </ThemeProviderContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
    defaultTheme: PropTypes.oneOf(["light", "dark", "system"]),
    storageKey: PropTypes.string,
};
