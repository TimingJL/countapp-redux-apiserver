import {
	ADD_COUNT,
	SUB_COUNT,
	INIT_COUNT,
} from './constants';


const defaultState = {
	count: 0,
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case ADD_COUNT:
			return {
				count: action.payload.count
			}
		case SUB_COUNT:
			return {
				count: action.payload.count
			}
		case INIT_COUNT:
			return {
				count: action.payload.count
			}
		default:
			// var initValue = initCount();
			return state
	}
}