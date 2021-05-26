import { createAction, createReducer } from '@reduxjs/toolkit';

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

//createReducer(initial_state, obj that map actions to functions that handle those actions)
export default createReducer([], {
    //key : value
    //actions: functions (event => event handler)
    [bugAdded.type]: (state, action) => {
        state.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }); //immer under the hood
    },

    [bugResolved.type]: (bugs, action) => { //can be state/bugs/any variable
        const index = bugs.findIndex(bug =>bug.id === action.payload.id);
        bugs[index].resolved = true;
    },

    [bugRemoved.type]: (state, action) => {
        return state.filter(bug => bug.id !== action.payload.id)
    }
});
