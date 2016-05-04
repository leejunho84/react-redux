'use strict';

import React, { Component } from 'react';

export default class CounterApp extends Component{
	_clickHandler(e, index){		
		this.props.onclick(index);
	}

	render(){
		let { couponList } = this.props;
		let list = couponList.map((props, index) => {
			return <li className={props.complete ? 'coupon-list on':'coupon-list off'} key={index}><a onClick={(e) => this._clickHandler(e, index)}>{props.code}</a></li>
		});

		return (
			<ul>{list}</ul>
		)
	}
}