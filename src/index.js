import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch((dispatch, getstate) => {
    // call  API
    // resolved => dispatch(a)
    dispatch({type: 'bugsReceived', bugs: [1,2,3] });
    // failed => dispatch(b)
});
