import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddCount } from './action'
import {
	URL,
} from './constants';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
	Add: (event) => {
		fetch(URL + '/add', {method: 'put'})
		.then(function(response) {
			//處理 response
			//fetch在只要在伺服器有回應的情況下，都會回傳已實現的Promise物件狀態(只要不是網路連線問題，
			//或是伺服器失連等等)，在這其中也會包含狀態碼為錯誤碼(404, 500...)的情況，
			//所以在使用時你還需要加一下檢查:
			//ok 代表狀態碼在範圍 200-299
			if (!response.ok) throw new Error(response.statusText)	
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