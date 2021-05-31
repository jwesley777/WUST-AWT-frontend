import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import counterReducer from '../features/counter/counterSlice';
import {rootReducer} from '../reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
// configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
