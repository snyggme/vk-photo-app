import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageAction';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Page {...this.props} />
                <User {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page
    }
}

const mapDispatchToProps = dispatch => ({
    getPhotos: year => dispatch(getPhotos(year))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
