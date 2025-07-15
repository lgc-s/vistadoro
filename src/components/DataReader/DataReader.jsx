import { data } from "../../data/data";
import { Text } from '../../components/Text/Text'
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import "./DataReader.css"

export function DataReader() {
    
    const { theme } = useContext(ThemeContext);
    const head = data[0];
    const content = data.slice(1)
    
    return (
        <table className={`table ${theme}`}>
            <thead>
                <tr>
                    {head.map((header, index) => (
                        <th className={`head ${theme}`} key={index}>
                            <Text type="Table">{header}</Text>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {content.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellData, cellIndex) => (
                            <td className={`row ${theme}`} key={cellIndex}>      
                                <Text type="Table">{cellData}</Text>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}