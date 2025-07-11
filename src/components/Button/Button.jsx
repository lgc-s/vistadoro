import { Text } from '../Text/Text'

import "./Button.css"

export function Button(props) {
    return (
        <Text type="Button">
            {props.children}
        </Text>
    )
}