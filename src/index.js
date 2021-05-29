import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved, unresolvedBugsSelector } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configureStore();

const unscubscribe = store.subscribe(() => {
    console.log("store updated", store.getState());
});

store.dispatch(projectAdded({name: "Project 1"}));

store.dispatch(bugAdded({description: "Bug 1 added"}));
store.dispatch(bugAdded({description: "Bug 2 added"}));
store.dispatch(bugAdded({description: "Bug 3 added"}));
store.dispatch(bugResolved({id:1}));

console.log(store.getState());

const unresolvedBugs = unresolvedBugsSelector(store.getState());
console.log("unresolved: ", unresolvedBugs);

unscubscribe();

store.dispatch(bugRemoved({id:1}));

console.log(store.getState());
