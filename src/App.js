import './App.css'

import { Content } from './components/Content/Content';
import { DataReader } from './components/DataReader/DataReader';
import { Header } from './components/Header/Header';
import { Text } from './components/Text/Text'

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
            <Content>
                <Text type="Title">Welcome to <b>Vistadoro</b></Text>
                <Text type="Normal">Vistadoro is an <b>ReactJS App</b> able to receive a .js data file and turn it into a basic table.</Text>
                <Text type="Normal">There are some theme options available to use. on clicking on one of them, the site design will be <b>changed</b>.</Text>
                <DataReader />
            </Content>
        </main>
        <Text type="Footer">Made by LGC-S</Text>
    </div>
  );
}

export default App;