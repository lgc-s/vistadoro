import "./Text.css"

export function Text(props) {
    if (props.type === "Title") {
        return (
            <div className="title">{props.children}</div>
        )
    } else if (props.type === "Normal") {
        return (
            <div className="normal">{props.children}</div>
        )
    } else if (props.type === "Button") {
        return (
            <div className="button">{props.children}</div>
        )
    } else if (props.type === "Table") {
        return (
            <div className="table">{props.children}</div>
        )
    } else if (props.type === "Footer") {
        return (
            <div className="footer">{props.children}</div>
        )
    } else if (props.type === "Menu") {
        return (
            <div className="menu">{props.children}</div>
        )
    } else {
        return (
            <div className="error">Text type not Recognized</div>
        )
    }
}