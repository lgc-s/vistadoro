import { Text } from '../../components/Text/Text'
import { Link } from '../../components/Link/Link'
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import "./Header.css"
import logo from "../../image/vistadoro1.png"
import logo_dark from "../../image/vistadoro2.png"
import logo_lava from "../../image/vistadoro3.png"
import logo_blue from "../../image/vistadoro4.png"
import logo_pink from "../../image/vistadoro5.png"

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
    } else if (theme === "lava") {
        return (
            <div className="header">
                <img src={logo_lava} alt="vistadoro"/>
                <Text type="Menu"><Link address="https://github.com/lgc-s/vistadoro">Documentation</Link></Text>
            </div>
        )
    } else if (theme === "blue") {
        return (
            <div className="header">
                <img src={logo_blue} alt="vistadoro"/>
                <Text type="Menu"><Link address="https://github.com/lgc-s/vistadoro">Documentation</Link></Text>
            </div>
        )
    } else if (theme === "pink") {
        return (
            <div className="header">
                <img src={logo_pink} alt="vistadoro"/>
                <Text type="Menu"><Link address="https://github.com/lgc-s/vistadoro">Documentation</Link></Text>
            </div>
        )
    } else if (theme === "xtra") {
        return (
            <div className="header">
                <img src={logo} alt="vistadoro"/>
                <Text type="Menu"><Link address="https://github.com/lgc-s/vistadoro">Documentation</Link></Text>
            </div>
        )
    }
}