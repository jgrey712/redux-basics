import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        //actions => action handlers
        bugAdded: (state, action) => {
            state.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },

        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug =>bug.id === action.payload.id);
            bugs[index].resolved = true;
        },

        bugRemoved: (state, action) => {
            return state.filter(bug => bug.id !== action.payload.id)
        }
    }//maps actions to action handlers
});

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;

// selector => get derived data
// memoization => cached data
export const unresolvedBugsSelector = createSelector(
    state => state.entities.bugs, //first function, result passed to second fn
    bugs => bugs.filter(bug => !bug.resolved) //2nd fn => result function, 
    //if bugs not changes, not executed: return from cache
);