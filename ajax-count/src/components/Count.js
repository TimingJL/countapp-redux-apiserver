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

const mapStateToProps = (state) => ({
	count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
	initCount: () => {
		fetch(URL, {method: 'get'})
		.then(function(response) {
			//處理 response
			//fetch在只要在伺服器有回應的情況下，都會回傳已實現的Promise物件狀態(只要不是網路連線問題，
			//或是伺服器失連等等)，在這其中也會包含狀態碼為錯誤碼(404, 500...)的情況，
			//所以在使用時你還需要加一下檢查:
			//ok 代表狀態碼在範圍 200-299
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
		} = this.props
		
		return (
			<div style={container}>
				<SubBtn />
				<input style={{textAlign: 'center'}} value={count} />
				<AddBtn />
			</div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Count)

//https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html