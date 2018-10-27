import { GET_PHOTOS_SUCCESS } from '../actions/PageAction';
import { GET_PHOTOS_REQUEST } from '../actions/PageAction';
import { GET_PHOTOS_FAIL } from '../actions/PageAction';

const initialState = {
	year: 2018,
	photos: [],
	error: '',
	isFetching: false
};

export const pageReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return {
				...state,
				year: action.payload,
				error: '',
				isFetching: true
			}
		case GET_PHOTOS_SUCCESS:
			return {
				...state,
				photos: action.payload,
				error: '',
				isFetching: false
			}
		case GET_PHOTOS_FAIL:
			return {
				...state,
				error: action.payload.message,
				isFetching: false
			}
 		default:
			return state;
	}
}