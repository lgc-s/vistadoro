import "./Header.css"
import logo from "../../image/vistadoro.png"

export function Header(props) {
    return (
        <div className="header">
            <img src={logo} alt="vistadoro"/>
        </div>
    )
}