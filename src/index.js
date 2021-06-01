import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch({
    type: 'apiCallBegin',
    payload: {
        url: "/bugs",
        method: "get",
        onSuccess: "bugsReceived",
        onError: "apiRequestFailed"
    }
});