import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/UserAction';

const initialState = {
	name: '',
	error: '',
	isFetching: false,
	isAuthorized: false
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case LOGIN_SUCCESS: 
			return {
				...state,
				isFetching: false,
				name: action.payload,
				isAuthorized: true
			};
		case LOGIN_FAIL: 
			return {
				...state,
				isFetching: false,
				error: action.payload.message,
				isAuthorized: false
			};
		default:
			return state;
	}
}