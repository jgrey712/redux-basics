import configureStore from './store/configureStore';
import * as actions from './store/api';

const store = configureStore();

store.dispatch(actions.apiCallBegin({
    url: "/bugs",
    method: "get",
    onSuccess: "bugsReceived",
    onError: actions.apiCallFailed.type
}));
