import { data } from "../../data/data";

export function DataReader() {
    let text = "null";

    if (data.length === 10) {
        if (data[1][0] === 'Slot') {
            text = "true";
        } else {
            text = "MAN";
        }
    } else {
        text = "Data not loaded or invalid format";
    }

    return (
        <p>{text}</p>
    );
}