import React, { Component } from 'react';

export class User extends Component {
	constructor(props) {
		super(props);

		this.renderTemplate = this.renderTemplate.bind(this);
	}
	renderTemplate() {
		const { name, error, isFetching } = this.props.user;

		if (error) {
			return <p>Во время запроса произошла ошибка, обновите страницу</p>
		}

		if (isFetching) {
			return <p>Загружаю...</p>
		}
		
		if (name) {
			return <p>Привет, {name}!</p>
		} else {
			return (
				<button className="btn" onClick={this.props.handleLogin}>
					Войти
				</button>
			)
		}
	}
	render() {
		return <div className="ib user">{this.renderTemplate()}</div>
	}
}