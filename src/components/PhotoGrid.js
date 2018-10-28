import React from 'react';

const PhotoGrid = (props) => {
	return (
		<div>
			{props.photos.map(photo => {
				let widthIndex = 1;

				for (let i = 0; i < photo.sizes.length; i++) {
					if (photo.sizes[i].width >= 400 && photo.sizes[i].width <= 700) {
						widthIndex = i;
						break;
					}
				}

				return (
					<figure key={photo.id}>
						<img src={photo.sizes[widthIndex].url} alt='' />
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