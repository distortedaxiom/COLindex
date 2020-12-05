import axios from 'axios';

export const GET_ALL_STATE_DATA = "GET_ALL_STATE_DATA";
export const GET_ALL_STATE_DATA_ERROR = "GET_ALL_STATE_DATA_ERROR";

export const GET_STATE_DATA = "GET_STATE_DATA";
export const GET_STATE_DATA_ERROR = "GET_STATE_DATA_ERROR";

export const GET_COUNTY_DATA = "GET_COUNTY_DATA";
export const GET_COUNTY_DATA_ERROR = "GET_COUNTY_DATA_ERROR";

export const GET_SPECIFIC_COUNTY_DATA = "GET_SPECIFIC_COUNTY_DATA";
export const GET_SPECIFIC_COUNTY_DATA_ERROR = "GET_SPECIFIC_COUNTY_DATA_ERROR";

export const getAllStateData = () => async dispatch => {
    try {
        const res = await axios.get(`https://colindex-api.herokuapp.com/api/states/`);
        dispatch({
            type: GET_ALL_STATE_DATA,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: GET_ALL_STATE_DATA_ERROR,
            payload: console.log(e),
        })
    }
};

export const getStateData = (state) => async dispatch => {
    try {
        const res = await axios.get(`https://colindex-api.herokuapp.com/api/states/${state}`);
        dispatch({
            type: GET_STATE_DATA,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: GET_STATE_DATA_ERROR,
            payload: console.log(e),
        })
    }
};

export const getCountyData = (state) => async dispatch => {
    try {
        const res = await axios.get(`https://colindex-api.herokuapp.com/api/counties/${state}`);
        dispatch({
            type: GET_COUNTY_DATA,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: GET_COUNTY_DATA_ERROR,
            payload: console.log(e),
        })
    }
};

export const getSpecificCountyData = (state, county) => async dispatch => {
    try {
        const res = await axios.get(`https://colindex-api.herokuapp.com/api/counties/${state}/${county}`);
        dispatch({
            type: GET_SPECIFIC_COUNTY_DATA,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: GET_SPECIFIC_COUNTY_DATA_ERROR,
            payload: console.log(e),
        })
    }
};
