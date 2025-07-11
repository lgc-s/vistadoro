import { Text } from '../../components/Text/Text'
import { Link } from '../../components/Link/Link'

import "./Header.css"
import logo from "../../image/vistadoro.png"

export function Header(props) {
    return (
        <div className="header">
            <img src={logo} alt="vistadoro"/>
            <Text type="Menu"><Link address="https://github.com/lgc-s/vistadoro">Documentation</Link></Text>
        </div>
    )
}