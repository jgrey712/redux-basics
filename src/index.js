import configureStore from './store/configureStore';
import { 
    bugAdded, 
    bugRemoved, 
    bugResolved, 
    unresolvedBugsSelector,
    bugAssignedToUser,
    getBugsByUser
} from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

const unscubscribe = store.subscribe(() => {
    console.log("store updated", store.getState());
});

store.dispatch(userAdded({name: 'user 1'}));
store.dispatch(userAdded({name: 'user 2'}));

store.dispatch(projectAdded({name: "Project 1"}));
store.dispatch(bugAdded({description: "Bug 1 added"}));
store.dispatch(bugAdded({description: "Bug 2 added"}));
store.dispatch(bugAdded({description: "Bug 3 added"}));
store.dispatch(bugAssignedToUser({bugId: 1, userId: 1}))
store.dispatch(bugResolved({id:1}));

const bugsByUser = getBugsByUser(1)(store.getState());
console.log("bugsByUser:", bugsByUser);

console.log(store.getState());

const unresolvedBugs = unresolvedBugsSelector(store.getState());
console.log("unresolved: ", unresolvedBugs);

unscubscribe();

store.dispatch(bugRemoved({id:1}));

console.log(store.getState());
