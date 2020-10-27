import { combineReducers, createStore } from 'redux';
import addName from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({addName});

const store = createStore(rootReducer, composeWithDevTools());

export default store;