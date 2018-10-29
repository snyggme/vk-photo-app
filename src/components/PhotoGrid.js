import React from 'react';

const PhotoGrid = (props) => {
	return (
		<div className='photo-grid'>
			{props.photos.map(photo => {
				let widthIndex = 3;

				for (let i = 0; i < photo.sizes.length; i++) {

					if (photo.sizes[i].width >= 600 && photo.sizes[i].width <= 1600) {
						console.log(photo.sizes[i].width)
						widthIndex = i;
						break;
					}
				}

				return (
					<figure key={photo.id} className='grid-figure'>
						<img src={photo.sizes[widthIndex].url} className='grid-photo' alt='' />
						<figcaption>
							<i className="fa fa-heart" aria-hidden="true"></i> {photo.likes.count}
						</figcaption>
					</figure>
				)
			})}
		</div>
	)
}

export default PhotoGrid;