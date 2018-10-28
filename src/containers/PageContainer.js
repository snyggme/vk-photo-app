import React from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageAction';

const PageContainer = (props) => {
	return(
		<Page {...props} />
	)
}

const mapStateToProps = store => {
	return {
		page: store.page,
		isAuthorized: store.user.isAuthorized
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getPhotos: year => dispatch(getPhotos(year))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageContainer);