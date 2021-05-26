import { createAction } from '@reduxjs/toolkit';

/*const bugUpdated = createAction("bugUpdated"); //bugUpdated is the action type
console.log(bugUpdated({id:1})); //payload
console.log(bugUpdated.type); //action type*/

// Action creators
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// Reducer
// Reducer has to be default module in ducks pattern
let lastId = 0;

export default function reducer(state = [], action) {
    switch(action.type) {
        case bugAdded.type:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case bugRemoved.type:
            return state.filter(bug => bug.id !== action.payload.id);

        case bugResolved.type:
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : {...bug, resolved: true}
            );

        default:
            return state;
    }    
}