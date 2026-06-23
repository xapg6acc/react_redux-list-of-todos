import { createSlice } from '@reduxjs/toolkit';

import { fetchTodos } from './todos';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, () => true)
      .addCase(fetchTodos.fulfilled, () => false)
      .addCase(fetchTodos.rejected, () => false);
  },
});
