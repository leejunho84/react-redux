'use strict';
import { CREATE_COUPON, REMOVE_COUPON, FILTER_COUPON } from '../actions';

const coupon = (state=[], action) => {
	switch(action.type){
		case CREATE_COUPON:
			return [...state, {
				'code':action.code,
				'complete':true
			}]
		case REMOVE_COUPON:
			if(state[action.index].complete) state[action.index].complete = false;
			else state[action.index].complete = true;
			return [...state];
		default:
			return state
	}
}

export default coupon