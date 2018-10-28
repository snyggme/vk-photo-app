import React, { Component } from 'react';
import PhotoGrid from './PhotoGrid'

export class Page extends Component {
	constructor(props) {
		super(props);

		this.years = [2018, 2017, 2016, 2015, 2014, 2013, 2012];

		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.props.getPhotos(this.years[0]);
	}
	handleClick(e) {
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
		const { year, photos } = this.props.page;
		const isAuthorized = this.props.isAuthorized;

		return(
			<div className='ib page'>
				<p>
					{this.years.map((year, index) => 
						<button 
							className='btn'
							onClick={this.handleClick}
							key={index}>
							{year}
						</button>
					)}
				</p>
				{ isAuthorized 
					? (
						<div>
							<p>{year} year [{photos.length}]</p>
							{this.renderTemplate()}
						</div>
					)
					: <p>You need to be authorized to view photos</p>
				}
			</div>
		)
	}
}