import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { getCountyData } from '../../../state/actions/dataAction'

const SidebarDisplay = (props) => {

    console.log(props)

    return (
        <div>
            <div>
                <h1>{props.data.county}</h1>
            </div>
            <div>
                <div>
                    <h4>Living Wage: ${props.data.livingwage1a0c}</h4>
                    <h4>Minimum Wage: ${props.data.minimumwage1a0c}</h4>
                    <h4>Minimum and Living Wage Difference: ${(props.data.minimumwage1a0c - props.data.livingwage1a0c).toFixed(2)}</h4>
                </div>
                <div>
                    <div>
                        <h2>Annual Estimated Expenses</h2>
                    </div>
                    <div>
                        <h4>Food: ${props.data.food1a0c}</h4>
                        <h4>Housing: ${props.data.housing1a0c}</h4>
                    </div>
                    <div>
                        <h4>Medical: ${props.data.medical1a0c}</h4>
                        <h4>Transportation: ${props.data.transportation1a0c}</h4>
                    </div>
                    <div>
                        <h4>Annual Taxes: ${props.data.annualtaxes1a0c}</h4>
                        <h4>Required Income After Taxes: ${props.data.reqincomeaftertaxes1a0c}</h4>
                    </div>
                    <div>
                        <h4>Other: ${props.data.other1a0c}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state_data: state.state_data
    }
}

export default connect(mapStateToProps, { getCountyData })(SidebarDisplay)
