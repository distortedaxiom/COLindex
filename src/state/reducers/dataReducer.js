import { colData } from '../actions/index'

const initialState = {
    stateData: {},
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
        default:
            return state;
    }
}
