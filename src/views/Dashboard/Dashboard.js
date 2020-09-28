import React, {useState} from "react";
import axios from "axios";

import Header from '../../components/Header/Header'
import MenuTab from '../../components/Dashboard/Menu/MenuTab'

import TableListView from '../Dashboard/TableListView'
import MapView from '../Dashboard/Map/MapView'
import PreferencesView from './PreferencesView'

import Sidebar from '../../components/Dashboard/Sidebar'

export default function Dashboard(props) {

    const [value, setValue] = React.useState(0);
    const []

    const tabChange = (event, newValue) => {
        setValue(newValue)
    }

    axios.get('https://colindex-api.herokuapp.com/api/states/')
        .then(res => {
            console.log(res)
        })

    return (
        <div>
            <Header />
            <div className="dashboard-body-container">
                <div className="map-menu-container">
                    <MenuTab tabChange={tabChange} value={value}/>
                    {value == 0 &&
                        <TableListView />
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
