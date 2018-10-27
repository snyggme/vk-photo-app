import React, { Component } from 'react';
import PhotoGrid from './PhotoGrid'

export class Page extends Component {
	constructor(props) {
		super(props);

		this.handelClick = this.handelClick.bind(this);
	}
	componentDidMount() {
		this.props.getPhotos(2018);
	}
	handelClick(e) {
		const year = +e.currentTarget.innerText;
		this.props.getPhotos(year);
	}
	renderTemplate() {
		const { photos, error, isFetching } = this.props.page;

		if (error) {
			return <p>Во время запроса произошла ошибка, обновите страницу</p>
		}

		if (isFetching) {
			return <p>Загружаю...</p>
		}

		if (photos.length === 0) {
			return <p>You have 0 photos this year :(</p>
		} else {
			return <PhotoGrid photos={photos} />
		}
	}
	render() {
		const { year, photos, isFetching } = this.props.page;

		return(
			<div className='ib page'>
				<p>
					<button className='btn' onClick={this.handelClick}>2018</button>
					<button className='btn' onClick={this.handelClick}>2017</button>
					<button className='btn' onClick={this.handelClick}>2016</button>
					<button className='btn' onClick={this.handelClick}>2015</button>
					<button className='btn' onClick={this.handelClick}>2014</button>
					<button className='btn' onClick={this.handelClick}>2013</button>
					<button className='btn' onClick={this.handelClick}>2012</button>
				</p>
				<p>{year} year [{photos.length}]</p>
				{this.renderTemplate()}
			</div>
		)
	}
}