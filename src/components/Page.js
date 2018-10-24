import React, { Component } from 'react';

export class Page extends Component {
	constructor(props) {
		super(props);

		this.handelClick = this.handelClick.bind(this);
	}
	handelClick(e) {
		const year = +e.currentTarget.innerText;
		this.props.getPhotos(year);
	}
	render() {
		const { year, photos, isFetching } = this.props.page;

		const pageContent = isFetching ? 'Loading...' : `You have ${photos.length} photos`

		return(
			<div className='ib page'>
				<p>
					<button className='btn' onClick={this.handelClick}>2018</button>
					<button className='btn' onClick={this.handelClick}>2017</button>
					<button className='btn' onClick={this.handelClick}>2016</button>
					<button className='btn' onClick={this.handelClick}>2015</button>
					<button className='btn' onClick={this.handelClick}>2014</button>
				</p>
				<p>{year}</p>
				<p>{pageContent}</p>
			</div>
		)
	}
}