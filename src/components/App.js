import React, { Component } from 'react';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';

class App extends Component {
    render() {
        return (
            <div className="app">
            	<UserContainer {...this.props} />
                <PageContainer {...this.props} />
            </div>
        );
    }
}

export default App;
