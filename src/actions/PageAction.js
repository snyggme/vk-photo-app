import { getMorePhotos, makeYearPhotos, photosArr, cached } from '../utils/getphoto';

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

export const getPhotos = (year) => {
	return dispatch => {
		dispatch({
			type: GET_PHOTOS_REQUEST,
			payload: year
		});

		if (cached) {
			let photos = makeYearPhotos(photosArr, year);

			dispatch({
				type: GET_PHOTOS_SUCCESS,
				payload: photos,
			})
		} else {
			getMorePhotos(0, 200, year, dispatch);
		}
	}
}