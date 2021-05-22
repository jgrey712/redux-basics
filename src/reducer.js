//reducers are pure functions
import * as actionTypes from './actionTypes';


let lastId = 0;

export default function reducer(state = [], action) {
    switch(action.type) {
        case actionTypes.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    removed: false
                }
            ];
        case  actionTypes.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }    
}