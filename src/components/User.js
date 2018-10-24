import React from 'react';

export const User = (props) => {
	const { name } = props.user;

	return(
		<div className='ib user'>
			<p>Hello, {name}</p>
		</div>
	)
}