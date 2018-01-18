import {
	ADD_COUNT,
	SUB_COUNT,
	INIT_COUNT,
	SET_SPIN,
} from './constants';


const defaultState = {
	count: 0,
	isLoadComplete: false,
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case ADD_COUNT:
			return {
				count: action.payload.count,
				isLoadComplete: true,
			}
		case SUB_COUNT:
			return {
				count: action.payload.count,
				isLoadComplete: true,
			}
		case INIT_COUNT:
			return {
				count: action.payload.count,
				isLoadComplete: true,
			}
		case SET_SPIN:
			return {
				isLoadComplete: false,
			}
		default:
			return state
	}
}