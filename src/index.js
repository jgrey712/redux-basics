import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configureStore();

const unscubscribe = store.subscribe(() => {
    console.log("store updated", store.getState());
});

store.dispatch(projectAdded({name: "Project 1"}));

store.dispatch(bugAdded({description: "Bug 1 added"}));
store.dispatch(bugResolved({id:1}));

console.log(store.getState());

unscubscribe();

store.dispatch(bugRemoved({id:1}));

console.log(store.getState());
