import React, {useState, useEffect} from "react";
import axios from "axios";

import Header from '../../components/Header/Header'
import MenuTab from '../../components/Dashboard/Menu/MenuTab'

import TableListView from '../Dashboard/TableListView'
import MapView from '../Dashboard/Map/MapView'
import PreferencesView from './PreferencesView'

import Sidebar from '../../components/Dashboard/Sidebar'

export default function Dashboard(props) {

    const [value, setValue] = useState(0)
    const [stateData, setStateData] = useState([])

    const tabChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(async () => {
        await axios.get('https://colindex-api.herokuapp.com/api/states/')
        .then(res => {
            setStateData(res.data)
        })
    }, [])

    console.log(stateData)

    return (
        <div>
            <Header />
            <div className="dashboard-body-container">
                <div className="map-menu-container">
                    <MenuTab tabChange={tabChange} value={value}/>
                    {value == 0 &&
                        <TableListView data={stateData}/>
                    }
                    {value == 1 &&
                        <MapView />
                    }
                    {value == 2 &&
                        <PreferencesView />
                    }
                </div>
                <div className="sidebar-container">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
