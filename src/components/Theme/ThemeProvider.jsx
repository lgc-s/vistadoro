import { useState } from "react";

import { ThemeContext } from "./ThemeContext";

export function ThemeProvider(props) {
    const [theme, setTheme] = useState("base");
    
    const value = {
        theme,
        setTheme,
    };
    
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}