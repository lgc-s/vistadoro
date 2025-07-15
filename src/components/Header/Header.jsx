import { Text } from '../../components/Text/Text'
import { Link } from '../../components/Link/Link'
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import "./Header.css"
import logo from "../../image/vistadoro1.png"
import logo_dark from "../../image/vistadoro2.png"

export function Header(props) {

    const { theme } = useContext(ThemeContext);

    if (theme === "base") {
        return (
            <div className="header">
                <img src={logo} alt="vistadoro"/>
                <Text type="Menu"><Link address="https://github.com/lgc-s/vistadoro">Documentation</Link></Text>
            </div>
        )
    } else if (theme === "dark") {
        return (
            <div className="header">
                <img src={logo_dark} alt="vistadoro"/>
                <Text type="Menu"><Link address="https://github.com/lgc-s/vistadoro">Documentation</Link></Text>
            </div>
        )
    }
}