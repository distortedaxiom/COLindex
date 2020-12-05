import React, { useState, useEffect } from 'react';
import SidebarDisplay from './SidebarDisplay';
import SidebarCountyDisplay from './SidebarCountyDisplay';

import { connect } from 'react-redux';

const SidebarDisplayContainer = (props) => {

    return (
        <div>
            <div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state_data: state.state_data
    }
}

export default connect(mapStateToProps)(SidebarDisplayContainer)
