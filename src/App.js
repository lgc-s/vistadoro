import { useContext } from "react";
import './App.css'

import { Button } from './components/Button/Button';
import { Content } from './components/Content/Content';
import { DataReader } from './components/DataReader/DataReader';
import { Header } from './components/Header/Header';
import { Link } from './components/Link/Link'
import { Text } from './components/Text/Text'
import { ThemeContext } from "./components/Theme/ThemeContext";

export default function App() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`app ${theme}`}>
            <Header/>
            <main>
                <Content>
                    <Text type="Title">Welcome to <b>Vistadoro</b></Text>
                    <Text type="Normal">Vistadoro is an <b>ReactJS App</b> able to receive a .js data file and turn it into a basic table.</Text>
                    <Text type="Normal">There are some theme options available to use. on clicking on one of them, the site design will be <b>changed</b>.</Text>
                    <div className='button-menu'>
                        <Button type="Theme 1">BASE</Button>
                        <Button type="Theme 2">DARK</Button>
                        <Button type="Theme 3">LAVA</Button>
                        <Button type="Theme 4">BLUE</Button>
                        <Button type="Theme 5">PINK</Button>
                        <Button type="Theme 6">XTRA</Button>
                    </div>
                    <DataReader />
                </Content>
            </main>
            <Text type="Footer">Made by <Link address="https://www.linkedin.com/in/lgc-s/">LGC-S</Link></Text>
        </div>
    );
}