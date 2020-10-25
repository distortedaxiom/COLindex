import { stateData } from '../actions/index'

const initialState = {
    stateData: {},
    currentState: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case stateData.GET_STATE_DATA:
            return {

            }
    }
}
