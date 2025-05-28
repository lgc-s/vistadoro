import { data } from "../../data/data";

import "./DataReader.css"

import brazil from '../../image/dataImg/brazil.png';
import japan from '../../image/dataImg/japan.png';
import bolivia from '../../image/dataImg/bolivia.png';
import canada from '../../image/dataImg/canada.png';
import uruguay from '../../image/dataImg/uruguay.png';
import paraguay from '../../image/dataImg/paraguay.png';

import sport from '../../image/dataImg/sport.png';
import oita from '../../image/dataImg/oita.png';
import palmaflor from '../../image/dataImg/palmaflor.png';
import pacific from '../../image/dataImg/pacific.png';
import plaza from '../../image/dataImg/plaza.png';
import trinidense from '../../image/dataImg/trinidense.png';

import league from '../../image/dataImg/league.png';
import cup from '../../image/dataImg/cup.png';
import objective from '../../image/dataImg/objective.png';

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
    
    const getClubLogo = (club) => {
        switch (club) {
            case "Sport Recife": return sport;
            case "Oita Trinita": return oita;
            case "Atlético Palmaflor": return palmaflor;
            case "Pacific FC": return pacific;
            case "Plaza Colonia": return plaza;
            case "Club Sportivo Trinidense": return trinidense;
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
                                {cellIndex === 1 ? (
                                    <div>
                                        <img className="flag margin-r" src={getFlagImage(cellData)} alt={`${cellData} flag`}/>
                                        {cellData}
                                    </div>
                                ) : null}
                                {cellIndex === 2 ? (
                                    <div>
                                        <img className="margin-r" src={getClubLogo(cellData)}alt={`${cellData} logo`}/>
                                        {cellData}
                                    </div>
                                ) : null}                    
                                {cellIndex === 3 ? (
                                    <div>
                                        {cellData.split(', ').map((trophyType, tIndex) => (
                                            trophyType === 'I' && tIndex === 0? (
                                                <img className="trophy" key={tIndex} src={league} alt="Trophy"/>
                                            ) : trophyType === 'I' && tIndex === 1? (
                                                <img className="trophy" key={tIndex} src={cup} alt="Cup"/>
                                            ) : trophyType === 'I' && tIndex === 2? (
                                                <img className="trophy" key={tIndex} src={objective} alt="Objective"/>
                                            ) : null 
                                            
                                        ))}
                                    </div>
                                ) : null}            
                                {cellIndex !== 1 && cellIndex !== 2 && cellIndex !== 3 ? cellData : null}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}