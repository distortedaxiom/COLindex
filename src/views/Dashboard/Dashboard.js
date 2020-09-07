import React, {useState} from "react";

import Header from '../../components/Header/Header'
import MenuTab from '../../components/Dashboard/Menu/MenuTab'
import MapView from '../Dashboard/Map/MapView'

export default function Dashboard(props) {

    const [value, setValue] = React.useState(0);

    const tabChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Header />
            <MenuTab tabChange={tabChange} value={value}/>
            <MapView />
        </div>
    )

}
