import store from './store';

//console.log(store);

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug 1"
    }
});

console.log(store.getState());

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
});

console.log(store.getState());
