import configureStore from './store/configureStore';
import { loadBugs } from './store/bugs';
import { addBug } from './store/bugs';

const store = configureStore();

// UI layer
store.dispatch(addBug({
    description: "a"
}));
