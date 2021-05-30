import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(() => {
    // call  API
    // resolved => dispatch(a)
    store.dispatch({type: 'bugsReceived', bugs: [1,2,3] });
    // failed => dispatch(b)
});
