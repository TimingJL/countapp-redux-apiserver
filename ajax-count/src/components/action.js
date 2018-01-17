import {
	ADD_COUNT,
	SUB_COUNT,
	INIT_COUNT,
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