import { useContext } from "react";
import "./Button.css";

import { ThemeContext } from "../Theme/ThemeContext";

export function Button(props) {
    const { setTheme } = useContext(ThemeContext);
    const themeHandler = () => {
        let newTheme = "base";

        if (props.type === "Theme 1") {
            newTheme = "base";
        } else if (props.type === "Theme 2") {
            newTheme = "dark";
        } else if (props.type === "Theme 3") {
            newTheme = "lava";
        } else if (props.type === "Theme 4") {
            newTheme = "blue";
        } else if (props.type === "Theme 5") {
            newTheme = "pink";
        } else if (props.type === "Theme 6") {
            newTheme = "xtra";
        }

        setTheme(newTheme);
    };

    const setButton = `button ${props.type.replace(" ", "").toLowerCase()}`;
    return (
        <div className={setButton} onClick={themeHandler}>
            {props.children}
        </div>
    );
}