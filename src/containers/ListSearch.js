import React from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ListSearchBody from '../components/ListSearchBody';
import { todoStatus,doingStatus,doneStatus } from '../store/actions'

const listSearch = (UserID,Type,BeginTime,OverTime,LiaoNum) => {
    return (dispatch,getState) => {	
		let state = getState()
		let status = state.status

		let doing = status.doing
		if(doing){
			return;
		}

		let url = "http://jisapp.jhtgroup.com/AppServer/Home/HistorySearch?UserID="+ UserID +"&Type="+ Type +"&BeginTime="+ BeginTime +"&OverTime="+ OverTime +"&LiaoNum="+ LiaoNum;

		status.doing = true
		status.done = false
		dispatch(todoStatus(status))

		return fetch(url, {
		  method: 'GET',
		  headers: {
			'Content-Type': 'application/json'
		  }
		}).then(response => {
			return response.json()
		}).then(json => {
      let listSearchData = json
			status.listSearchData = listSearchData;			
			status.doing = false
			status.done = true
			dispatch(doneStatus(status))		
		}).catch((ex) => {
			status.error = "Something mistake :" + ex;
			status.doing = false
			status.done = true
			dispatch(doneStatus(status))
		})
	}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListSearchData:(UserID,Type,BeginTime,OverTime,LiaoNum) => {
    	dispatch(listSearch(UserID,Type,BeginTime,OverTime,LiaoNum))
    }
  }
}

const ListSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSearchBody);

export default class ListSearch extends React.Component {
	render(){
		return (
		  <div>
		  	<Header {...this.props}/>
		  	<div className="main">
		  		<ListSearchForm {...this.props}/>
		  	</div>
		  </div>
		)	
	}
}

