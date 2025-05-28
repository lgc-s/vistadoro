import { data } from "../../data/data";

import "./DataReader.css"

import brazil from '../../image/dataImg/brazil.png';
import japan from '../../image/dataImg/japan.png';
import bolivia from '../../image/dataImg/bolivia.png';
import canada from '../../image/dataImg/canada.png';
import uruguay from '../../image/dataImg/uruguay.png';
import paraguay from '../../image/dataImg/paraguay.png';

export function DataReader() {
    
    const head = data[0];
    const content = data.slice(1)
    
    const getFlagImage = (country) => {
        switch (country) {
            case "Brazil": return brazil;
            case "Japan": return japan;
            case "Bolivia": return bolivia;
            case "Canada": return canada;
            case "Uruguay": return uruguay;
            case "Paraguay": return paraguay;
            default: return null;
        }
    };

    
    return (
        <table>
            <thead>
                <tr>
                    {head.map((header, index) => (
                        <th className="head" key={index}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {content.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellData, cellIndex) => (
                            <td className="row" key={cellIndex}>      
                                {cellData}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}