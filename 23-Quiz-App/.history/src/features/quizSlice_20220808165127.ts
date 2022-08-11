import { createSlice } from '@reduxjs/toolkit';
import { quizThunk } from './quizThunk';
import {} from '../typing';
const initialState = {
	hello: 'hello',
};

const quizSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default quizSlice.reducer;
