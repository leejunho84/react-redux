'use strict';
import { FILTER_COUPON } from '../actions';

const filter = (state='ALL', action) => {
	switch(action.type){
		case FILTER_COUPON:
			return action.filter;
		default:
			return state;
	}
}

export default filter