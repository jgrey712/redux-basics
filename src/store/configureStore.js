import { configureStore } from '@reduxjs/toolkit';
//import reducer from './bugs';
import reducer from './projects';

export default function() {
    const store = configureStore({
        reducer: reducer //lhs reducer is from @reduxjs/toolkit, rhs from ./bugs
    });   
    return store;
};