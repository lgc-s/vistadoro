import './App.css'

import { Button } from './components/Button/Button';
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
                <Text type="Title">Welcome to Vistadoro</Text>
                <Text type="Normal">Vistadoro is an app able to receive a .js data file and turn it into a fully visible table.</Text>
                <Text type="Normal">There are some options available to use. on clicking on one of them, the table will be loaded</Text>
                <Button>9 ITENS</Button>
                <DataReader />
            </Content>
        </main>
    </div>
  );
}

export default App;