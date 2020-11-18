import { colData } from '../actions/index'

const initialState = {
    stateData: {},
    countyData: {},
    adminLevel: '',
    currentLoc: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
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
