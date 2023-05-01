import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/app/store';

export interface SearchBoxState {
  keyword: string;
  filter: string;
}

const initialState: SearchBoxState = {
  keyword: '',
  filter: '',
};

export const searchBoxSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeKeyword: (state, { payload }: PayloadAction<SearchBoxState['keyword']>) => {
      state.keyword = payload;
    },
    updateSearchFilter: (state, { payload }: PayloadAction<SearchBoxState>) => {
      state.filter = payload.filter;
      state.keyword = payload.keyword;
    },
  },
});

export const { changeKeyword, updateSearchFilter } = searchBoxSlice.actions;

export const selectKeyword = (state: RootState) => state.searchBox.keyword;
export const selectSearchFilter = (state: RootState) => state.searchBox;

export default searchBoxSlice.reducer;
