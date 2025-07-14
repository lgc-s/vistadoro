import "./Button.css"

export function Button(props) {
    if (props.type === "Theme 1") {
        return (
            <div className='button theme1'>
                   {props.children}      
            </div>
        )
    } else if (props.type === "Theme 2") {
        return (
            <div className='button theme2'>
                {props.children}
            </div>
        )
    } else if (props.type === "Theme 3") {
        return (
            <div className='button theme3'>
                {props.children}
            </div>
        )
    } else if (props.type === "Theme 4") {
        return (
            <div className='button theme4'>
                {props.children}
            </div>
        )
    } else if (props.type === "Theme 5") {
        return (
            <div className='button theme5'>
                {props.children}
            </div>
        )
    } else if (props.type === "Theme 6") {
        return (
            <div className='button theme6'>
                {props.children}
            </div>
        )
    }
}