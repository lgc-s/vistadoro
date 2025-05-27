import { data } from "../../data/data";

export function DataReader() {

    const head = data[0];
    const content = data.slice(1)

    return (
        <table>
            <thead>
                <tr>
                    {head.map((header, index) => (<th key={index}>{header}</th>))};
                </tr>
            </thead>
            <tbody>
                {content.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellData, cellIndex) => (
                            <td key={cellIndex}>{cellData}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}