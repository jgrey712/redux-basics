import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegin } from './api';

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        //actions => action handlers
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload;
        },

        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.list.findIndex(bug => bug.id === bugId);
            bugs.list[index].userId = userId;
        },

        bugAdded: (state, action) => {
            state.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },

        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug =>bug.id === action.payload.id);
            bugs.list[index].resolved = true;
        },

        bugRemoved: (state, action) => {
            return state.list.filter(bug => bug.id !== action.payload.id)
        }
    }//maps actions to action handlers
});

export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser, bugsReceived } = slice.actions;
export default slice.reducer;

//action creators
const url = '/bugs';
export const loadBugs = () => apiCallBegin({
    url,
    onSuccess: bugsReceived.type
});

// selector => get derived data
// memoization => cached data
export const unresolvedBugsSelector = createSelector(
    state => state.entities.bugs, //first function, result passed to second fn
    bugs => bugs.filter(bug => !bug.resolved) //2nd fn => result function, 
    //if bugs not changes, not executed: return from cache
);

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug =>  bug.userId === userId)
);