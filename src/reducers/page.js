import { GET_PHOTOS_SUCCESS } from '../actions/PageAction';
import { GET_PHOTOS_REQUEST } from '../actions/PageAction';

const initialState = {
	year: 2018,
	photos: [],
	isFetching: false
};

export const pageReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return {
				...state,
				year: action.payload,
				isFetching: true
			}
		case GET_PHOTOS_SUCCESS:
			return {
				...state,
				photos: action.payload,
				isFetching: false
			}
 		default:
			return state;
	}
}