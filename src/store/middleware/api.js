import axios from 'axios';
import * as actions from '../api';

const api = ({dispatch}) => next => async action => {
    if (action.type !== actions.apiCallBegin.type) {
        next(action);
        return;
    }

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if (onStart) {
        dispatch({type: onStart});
    }
    
    next(action);

    try {
        const response = await axios.request({
            baseURL: "http://localhost:9001/api",
            url,
            method,
            data
        });
        //general
        dispatch(actions.apiCallSuccess(response.data));
        //specific
        if (onSuccess) {
            dispatch({type: onSuccess, payload: response.data});
        }
    } catch(error) {
        //general
        dispatch(actions.apiCallFailed(error.message));
        //specific
        if (onError) {
            dispatch({type: onError, payload: error.message});
        }
    }
};

export default api;