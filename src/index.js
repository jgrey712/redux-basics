import store from './store';
import { bugAdded, bugRemoved } from './actions';

//console.log(store);

// state = reducer(state, action);
// notify the subscriber

const unscubscribe = store.subscribe(() => {
    // called anytime store is updated
    console.log("store updated", store.getState());
});

store.dispatch(bugAdded("Bug 1 added"));

console.log(store.getState());

unscubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState()); //u only just dont get notified. Things will still happen!
