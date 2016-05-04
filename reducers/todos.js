'use strict';
import {CREATE_COUPON, REMOVE_COUPON} from '../actions';

const todos = (state=[], action) => {
	switch(action.type){
		case CREATE_COUPON:
			return [...state, {
				'code':action.code,
				'complete':true
			}]
		case REMOVE_COUPON:
			state[action.index].complete = false;
			return [...state];
		default:
			return state
	}
}

export default todos