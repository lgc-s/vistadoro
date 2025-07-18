import { createContext } from "react";

export const ThemeContext = createContext({
    theme: "base",
    setTheme: () => {},
});