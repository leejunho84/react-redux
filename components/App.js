'use strict';

import React, { Component } from 'react';
import uuid from 'node-uuid';

export default class App extends Component{
	clickHandler(e){
		this.props.onclick(uuid.v4());
	}

	render(){
		return(
			<div className='container'>
				<h1>CouponPage</h1>
				<span>{this.props.coupon?this.props.coupon.code:''}</span>
				<button onClick={e => this.clickHandler(e)}>쿠폰받기</button>
			</div>
		)
	}
}