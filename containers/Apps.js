'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCoupon, removeCoupon } from '../actions';
import App from '../components/app';
import CounterApp from '../components/counterapp';


class Apps extends Component {
	render(){
		let {onTodoAddCoupon, onTodoRemoveCoupon, coupon, filter} = this.props;
		let code = (coupon.length) ? {code:coupon[coupon.length - 1].code} : '';

		return (
			<div>
				<App onclick={(code) => {onTodoAddCoupon(code)}} coupon={code.code} />
				<CounterApp onclick={(index)=>{onTodoRemoveCoupon(index)}} filter={filter} couponList={coupon} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		coupon:state.coupon,
		filter:state.filter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoAddCoupon:(code) => {
			dispatch(createCoupon(code));
		},
		onTodoRemoveCoupon:(index) => {
			dispatch(removeCoupon(index));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Apps);