'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterCoupon } from '../actions';

class Footer extends Component {
	_clickHandler(type){
		let { onChangeFilter } = this.props;
		switch(type){
			case 'ALL':
				onChangeFilter('ALL');			
				break;
			case 'NEW':
				onChangeFilter('NEW');
				break;
			case 'COMPLETE':
				onChangeFilter('COMPLETE');
				break;
		}
	}

	render(){
		return (
			<div>
				<button onClick={() => this._clickHandler('ALL')}>ALL</button>
				<button onClick={() => this._clickHandler('NEW')}>NEW</button>
				<button onClick={() => this._clickHandler('COMPLETE')}>COMPLETE</button>
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
		onChangeFilter:(filter) => {
			dispatch(filterCoupon(filter));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);