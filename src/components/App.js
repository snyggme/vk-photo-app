import React, { Component } from 'react';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <PageContainer {...this.props} />
                <UserContainer {...this.props} />
            </div>
        );
    }
}

export default App;
