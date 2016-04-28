'use strict';

export const CREATE_COUPON = 'CREATE_COUPON';
export const createCoupon = (code) => {
	return {
		type:CREATE_COUPON,
		code:code
	}
}