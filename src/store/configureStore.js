import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';

export default function() {
    const store = configureStore({
        reducer,
        middleware: [logger]
    });   
    return store;
};