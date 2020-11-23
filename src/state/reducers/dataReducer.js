import { colData } from '../actions/index'

const initialState = {
    allStateData: [],
    stateData: {},
    countyData: [],
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
                stateData: action.payload
            }
        case colData.GET_COUNTY_DATA:
            return {
                ...state,
                adminLevel: 'county',
                countyData: action.payload
            }
        default:
            return state;
    }
}
