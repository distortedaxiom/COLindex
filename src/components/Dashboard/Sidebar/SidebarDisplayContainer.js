import React, { useState, useEffect } from 'react';
import SidebarDisplay from './SidebarDisplay';
import SidebarCountyDisplay from './SidebarCountyDisplay';

import { connect } from 'react-redux';

const SidebarDisplayContainer = (props) => {

    console.log(props)

    return (
        <div>
            <div>
                {props.state_data.countyData[0] ? <SidebarCountyDisplay data={props.state_data.countyData[0]} /> : <SidebarDisplay data={props.state_data.stateData[0]} />}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state_data: state.data
    }
}

export default connect(mapStateToProps)(SidebarDisplayContainer)
