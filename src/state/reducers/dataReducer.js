import { colData } from '../actions/index'

const initialState = {
    allStateData: [],
    stateData: {},
    countiesData: [],
    countyData: {},
    adminLevel: 'state',
    currentLoc: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case colData.GET_ALL_STATE_DATA:
            return {
                ...state,
                adminLevel: 'state',
                allStateData: action.payload
            }
        case colData.GET_STATE_DATA:
            return {
                ...state,
                adminLevel: 'state',
                stateData: action.payload,
                countyData: {}
            }
        case colData.GET_COUNTY_DATA:
            return {
                ...state,
                adminLevel: 'county',
                countiesData: action.payload
            }
        case colData.GET_SPECIFIC_COUNTY_DATA:
            return {
                ...state,
                countyData: action.payload,
                stateData: {}
            }
        default:
            return state;
    }
}
