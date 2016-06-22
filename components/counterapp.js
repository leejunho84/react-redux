'use strict';

import React, { Component } from 'react';

export default class CounterApp extends Component{
	_clickHandler(e, index){
		this.props.onclick(index);
	}

	_rtnList(props, index){
		return(
			<li className={props.complete ? 'coupon-list new':'coupon-list complete'} key={index}>
				<a onClick={(e) => this._clickHandler(e, index)}>{props.code}</a>
			</li>
		)
	}

	render(){
		let { couponList, filter } = this.props;
		let list = couponList.map((props, index) => {
			if(filter === 'NEW' && props.complete){
				return this._rtnList(props, index);
			}else if(filter === 'COMPLETE' && !props.complete){
				return this._rtnList(props, index);
			}else if(filter === 'ALL'){
				return this._rtnList(props, index);
			}
		});

		return (
			<ul>{list}</ul>
		)
	}
}