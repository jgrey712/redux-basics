import configureStore from './store/configureStore';
import { loadBugs, resolveBug } from './store/bugs';
import { addBug } from './store/bugs';

const store = configureStore();

// UI layer
store.dispatch(loadBugs());

setTimeout(() => 
    store.dispatch(resolveBug(1)
), 2000);
