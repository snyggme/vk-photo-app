import React from 'react';

const PhotoGrid = (props) => {
	return (
		<div>
			{props.photos.map(photo => 
				<figure key={photo.id}>
					<img src={photo.sizes[3].url} alt='' />
					<figcaption>
						<i class="fa fa-heart" aria-hidden="true"></i> {photo.likes.count}
					</figcaption>
				</figure>)}
		</div>
	)
}

export default PhotoGrid;