import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import "./Text.css"

export function Text(props) {

    const { theme } = useContext(ThemeContext);

    if (props.type === "Title") {
        return (
            <div className={`title ${theme}`}>{props.children}</div>
        )
    } else if (props.type === "Normal") {
        return (
            <div className={`normal ${theme}`}>{props.children}</div>
        )
    } else if (props.type === "Button") {
        return (
            <div className={`button ${theme}`}>{props.children}</div>
        )
    } else if (props.type === "Table") {
        return (
            <div className={`table ${theme}`}>{props.children}</div>
        )
    } else if (props.type === "Footer") {
        return (
            <div className={`footer ${theme}`}>{props.children}</div>
        )
    } else if (props.type === "Menu") {
        return (
            <div className={`menu ${theme}`}>{props.children}</div>
        )
    } else {
        return (
            <div className="error">Text type not Recognized</div>
        )
    }
}