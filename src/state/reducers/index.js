import { combineReducers } from 'redux';

import { reducer as data } from './dataReducer'

const rootReducer = combineReducers({
    data,
});

export default rootReducer;
