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
                <Text type="Normal">Vistadoro is an app able to receive a .js data file and turn it into a basic table.</Text>
                <Text type="Normal">There are some theme options available to use. on clicking on one of them, the site design will be changed</Text>
                <DataReader />
            </Content>
        </main>
    </div>
  );
}

export default App;