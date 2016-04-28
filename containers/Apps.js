'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createCoupon} from '../actions';
import App from '../components/App';


class Apps extends Component {
	render(){
		console.log(this.props);
		const {dispatch, state} = this.props;
		this.state = (state.length) ? {code:state[state.length - 1].code} : '';
		return <App onclick={code => dispatch(createCoupon(code))} coupon={{code:this.state.code}} />
	}
}

const mapStateToProps = (state) => {
	return {
		state:state.todo
	}
}

export default connect(mapStateToProps)(Apps);