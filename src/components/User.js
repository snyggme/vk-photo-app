import React, { Component } from 'react';

export class User extends Component {
	renderTemplate = () => {
		const { user: { name, error, isFetching }, handleLogin } = this.props;

		if (error) {
			return <p>Во время запроса произошла ошибка, обновите страницу</p>
		}

		if (isFetching) {
			return <div style={{
				justifySelf: 'flex-end',
				width: '200px',
				color: 'white',
				marginRight: '100px'
			}}>
				Загружаю...
			</div>
		}
		
		if (name) {
			return <div className='logged'>Привет, {name}!</div>
		} else {
			return (
				<button className="btn btn-login" onClick={handleLogin}>
					Login
				</button>
			)
		}
	}

	render() {
		return (
			<header className="user">
				<h2>Top Photo App</h2>
				{this.renderTemplate()}
			</header>
		)
	}
}