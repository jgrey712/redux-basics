import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; //automatically brings redux thunk
import reducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast';

export default function() {
    const store = configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            logger({destination: 'console'}),
            toast
        ]
    });   
    return store;
};