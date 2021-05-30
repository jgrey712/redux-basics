import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; //automatically brings redux thunk
import reducer from './reducer';
import logger from './middleware/logger';

export default function() {
    const store = configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            logger({destination: 'console'})
        ]
    });   
    return store;
};