import React, { useState, useEffect } from "react";
import axios from "axios";

import { connect } from 'react-redux';
import { getAllStateData } from '../../state/actions/dataAction'

import Header from '../../components/Header/Header'
import MenuTab from '../../components/Dashboard/Menu/MenuTab'

import TableListView from '../Dashboard/TableListView'
import CountyTable from '../../components/Dashboard/Table/CountyTable'
import MapView from '../Dashboard/Map/MapView'
import PreferencesView from './PreferencesView'

import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'

const Dashboard = (props) => {

    const [value, setValue] = useState(0)
    const [stateData, setStateData] = useState([])

    const tabChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        props.getAllStateData()
    }, [])

    return (
        <div>
            <Header />
            <div className="dashboard-body-container">
                <div className="map-menu-container">
                    <MenuTab tabChange={tabChange} value={value} />
                    {value == 0 &&
                        <div>{(props.data.adminLevel == 'county') ? <div><CountyTable data={props.data.countyData} /> </div>
                            : <div><TableListView data={props.data.allStateData} /> </div>} </div>
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

const mapStateToProps = state => {
    return {
        data: state.data
    }
}


export default connect(mapStateToProps, { getAllStateData })(Dashboard)
