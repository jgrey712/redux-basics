import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

//console.log(store);

// state = reducer(state, action);
// notify the subscriber

const unscubscribe = store.subscribe(() => {
    // called anytime store is updated
    console.log("store updated", store.getState());
});

store.dispatch(bugAdded("Bug 1 added"));
store.dispatch(bugResolved(1));

console.log(store.getState());

unscubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState()); //u only just dont get notified. Things will still happen!
