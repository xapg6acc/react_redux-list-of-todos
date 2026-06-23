import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getTodos } from '../api';
import { Todo } from '../types/Todo';

export const fetchTodos = createAsyncThunk('todos/fetch', () => getTodos());

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (_state, action) => action.payload);
  },
});
