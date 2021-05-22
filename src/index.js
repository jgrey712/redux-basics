import store from './store';
import * as actionTypes from './actionTypes';

//console.log(store);

// state = reducer(state, action);
// notify the subscriber

const unscubscribe = store.subscribe(() => {
    // called anytime store is updated
    console.log("store updated", store.getState());
});

store.dispatch({
    type: actionTypes.BUG_ADDED,
    payload: {
        description: "Bug 1"
    }
});

console.log(store.getState());

unscubscribe();

store.dispatch({
    type: actionTypes.BUG_REMOVED,
    payload: {
        id: 1
    }
});

console.log(store.getState()); //u only just dont get notified. Things will still happen!
