import { combineReducers } from 'redux';
import bugReducer from './bugs';
import projectsReducer from './projects';

export default combineReducers({
    bugs: bugReducer,
    projects: projectsReducer
});