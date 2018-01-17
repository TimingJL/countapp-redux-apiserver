import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSubCount } from './action'
import {
	URL,
} from './constants';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
	Sub: (event) => {
		fetch(URL + '/sub', {method: 'put'})
		.then(function(response) {
			//處理 response
			//fetch在只要在伺服器有回應的情況下，都會回傳已實現的Promise物件狀態(只要不是網路連線問題，
			//或是伺服器失連等等)，在這其中也會包含狀態碼為錯誤碼(404, 500...)的情況，
			//所以在使用時你還需要加一下檢查:
			//ok 代表狀態碼在範圍 200-299
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