'use strict';

export const CREATE_COUPON = 'CREATE_COUPON';
export const REMOVE_COUPON = 'REMOVE_COUPON';

export const createCoupon = (code) => {
	return {
		type:CREATE_COUPON,
		code:code
	}
}

export const removeCoupon = (index) => {
	return {
		type:REMOVE_COUPON,
		index:index
	}
}