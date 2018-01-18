import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddCount, dispatchSetSpin } from './action'
import {
	URL,
} from './constants';

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const mapStateToProps = (state) => ({
	isLoadComplete: state.isLoadComplete,
})

const mapDispatchToProps = (dispatch) => ({
	Add: (event) => {
		dispatch(dispatchSetSpin({ 

		}))
		fetch(URL + '/add', {method: 'put'})
		.then(function(response) {
			if (!response.ok) throw new Error(response.statusText)
			sleep(1000);
			var jsonPromise =  response.json();
			jsonPromise.then(item => {
				dispatch(dispatchAddCount({ 
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

class AddBtn extends Component {
	render() {
		const {
			Add,
		} = this.props
		return (
			<button onClick={Add}>+</button>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBtn)
// fetch tutorial
// https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html