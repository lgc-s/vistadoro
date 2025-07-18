import { useContext } from "react";
import "./DataReader.css"

import { Text } from '../../components/Text/Text'
import { ThemeContext } from "../../components/Theme/ThemeContext";

import { data } from "../../data/data";

export function DataReader() {
    const { theme } = useContext(ThemeContext);
    const content = data.slice(1)
    const head = data[0];
    
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