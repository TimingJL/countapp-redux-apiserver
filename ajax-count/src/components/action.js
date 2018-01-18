import {
	ADD_COUNT,
	SUB_COUNT,
	INIT_COUNT,
	SET_SPIN,
} from './constants';

export const dispatchAddCount = (payload) => ({
	type: ADD_COUNT,
	payload,
});

export const dispatchSubCount = (payload) => ({
	type: SUB_COUNT,
	payload,
});

export const dispatchInitCount = (payload) => ({
	type: INIT_COUNT,
	payload,
});

export const dispatchSetSpin = (payload) => ({
	type: SET_SPIN,
	payload,
});