'use strict';

import {combineReducers} from 'redux';
import coupon from './reducer_coupon';
import filter from './reducer_filter';

const todoApp = combineReducers({
	coupon,
	filter
});

export default todoApp;