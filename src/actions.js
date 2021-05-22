import * as actionTypes from './actionTypes';

export function bugAdded(description) {
    return {
        type: actionTypes.BUG_ADDED,
        payload: {
            description
        }
    }
}

//arrow function syntax
export const bugRemoved = () => ({
    type: actionTypes.BUG_REMOVED,
    payload: {
        id: 1
    }
});

export const bugResolved = id => ({
    type: actionTypes.BUG_RESOLVED,
    payload: {
        id
    }
});