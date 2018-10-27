import React from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { handleLogin } from '../actions/UserAction';

const UserContainer = (props) => {
	return(
		<User {...props} />
	)
}

const mapStateToProps = store => {
	return {
		user: store.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleLogin: () => dispatch(handleLogin())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserContainer);