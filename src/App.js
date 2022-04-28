import 'antd/dist/antd.css';
import './App.css';
import 'leaflet/dist/leaflet.css'


import {Tracker} from "./components/Tracker/Tracker";

function App() {
    return (
        <div className={'App'}>
            <Tracker/>
        </div>
    );
}

export default App;
