import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import func from './middleware/func';

export default function() {
    const store = configureStore({
        reducer,
        middleware: [
            logger({destination: 'console'}),
            func
        ] //order matters
    });   
    return store;
};