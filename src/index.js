import store from './store';

//console.log(store);

const unscubscribe = store.subscribe(() => {
    // called anytime store is updated
    console.log("store updated", store.getState());
});

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug 1"
    }
});

console.log(store.getState());

unscubscribe();

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
});

console.log(store.getState()); //u only just dont get notified. Things will still happen!
