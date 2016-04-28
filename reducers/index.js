import {combineReducers} from 'redux';
import todo from './todos.js';

const todoApp = combineReducers({
	todo
});

export default todoApp;