import "./Button.css"

import { Text } from '../Text/Text'

export function Button(props) {
    return (
        <Text type="Button">
            {props.children}
        </Text>
    )
}