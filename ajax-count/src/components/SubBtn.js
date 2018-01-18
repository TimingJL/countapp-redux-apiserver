import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSubCount } from './action'
import {
	URL,
} from './constants';

const mapStateToProps = (state) => ({
	isLoadComplete: state.isLoadComplete,
})

const mapDispatchToProps = (dispatch) => ({
	Sub: (event) => {
		fetch(URL + '/sub', {method: 'put'})
		.then(function(response) {
			if (!response.ok) throw new Error(response.statusText)	
			var jsonPromise =  response.json();
			jsonPromise.then(item => {
				dispatch(dispatchSubCount({ 
					count: item.count,
				}))
			})
		}).catch(function(err) {
			// Error :(
			console.log(err);
			return 0;
		})	
	}
});

class SubBtn extends Component {
	render() {
		const {
			Sub,
		} = this.props
		return (
			<button onClick={Sub}>-</button>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SubBtn)