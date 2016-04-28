'use strict';
import {CREATE_COUPON} from '../actions';

const todos = (state={}, action) => {
	switch(action.type){
		case CREATE_COUPON:
			return [...state, {
				'type':action.type,
				'code':action.code
			}]
		default:
			return state
	}
}

export default todos