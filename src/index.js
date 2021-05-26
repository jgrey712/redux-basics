import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs';

const store = configureStore();

const unscubscribe = store.subscribe(() => {
    console.log("store updated", store.getState());
});

store.dispatch(bugAdded("Bug 1 added"));
store.dispatch(bugResolved(1));

console.log(store.getState());

unscubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
