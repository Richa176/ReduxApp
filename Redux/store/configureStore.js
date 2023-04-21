import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../reducers/countReducer';
const rootReducer = combineReducers(
    { counter: countReducer }
);

export const store = configureStore({
    reducer: rootReducer
});
