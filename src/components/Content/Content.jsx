import "./Content.css"

import { Text } from '../Text/Text'

export function Content(props) {
    return (
        <div>
            <div className="content">{props.children}</div>
            <div className="content-mobile">
                <Text type="Title">Mobile <b>not</b> supported</Text>
                <Text type="Normal">Vistadoro is not intended to be used on mobile devices</Text>
            </div>
        </div>

    )
}