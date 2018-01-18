import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubBtn from './SubBtn';
import AddBtn from './AddBtn';
import { dispatchInitCount } from './action'

import {
	URL,
} from './constants';

const container ={
	margin: '10px',
}

var Loader = require('react-loader');

const mapStateToProps = (state) => ({
	count: state.count,
	isLoadComplete: state.isLoadComplete,
});

const mapDispatchToProps = (dispatch) => ({
	initCount: () => {
		fetch(URL, {method: 'get'})
		.then(function(response) {
			if (!response.ok) throw new Error(response.statusText)	
			var jsonPromise =  response.json();
			jsonPromise.then(item => {
				dispatch(dispatchInitCount({ 
					count: item.count,			
				}))
			})
		}).catch(function(err) {
			// Error :(
			console.log(err);
		})
	}
});

class Count extends Component {

	componentDidMount() {
		this.props.initCount();
	}

	render() {
		const {
			count,
			isLoadComplete,
		} = this.props
		
		return (
			<div style={container}>
				<Loader loaded={isLoadComplete}>
					<SubBtn />
					<div style={{display: 'inline-block', margin: '30px'}}>{count}</div>
					<AddBtn />
				</Loader>
			</div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Count)

//https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html