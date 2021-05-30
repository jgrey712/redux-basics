import configureStore from './store/configureStore';

const store = configureStore();

/*store.dispatch((dispatch, getState) => {
    // call  API
    // resolved => dispatch(a)
    dispatch({type: 'bugsReceived', bugs: [1,2,3] });
    console.log(getState()); //put logic
    // failed => dispatch(b)
});*/

store.dispatch({
    type: 'error',
    payload: {message: "an error occured"}
});
