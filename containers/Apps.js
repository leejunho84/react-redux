'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCoupon, removeCoupon } from '../actions';
import App from '../components/App';
import CounterApp from '../components/counterapp';


class Apps extends Component {
	render(){
		let {onTodoAddCoupon, onTodoRemoveCoupon, state} = this.props;
		let code = (state.length) ? {code:state[state.length - 1].code} : '';

		return (
			<div>
				<App onclick={code => onTodoAddCoupon(code)} coupon={{code:code.code}} />
				<CounterApp onclick={index => onTodoRemoveCoupon(index)} couponList={state} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state:state.todo
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