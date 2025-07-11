import "./Link.css"

export function Link(props) {
    return (
        <a className="link" href={props.address} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    )
}