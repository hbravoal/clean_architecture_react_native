import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import HomeState from '../../../domain/home/state/homeState';
import {TResponse} from 'domain/home/model/tResponse';
import Card from 'domain/home/model/card';
export const homeSlice = createSlice({
  name: 'home',
  initialState: HomeState,
  reducers: {
    homePageBegin: state => {
      state.loading = true;
    },
    homePageSuccess: (state, response: PayloadAction<TResponse<Card[]>>) => {
      state.data = response.payload;
      state.loading = false;
    },
    homePageErr: (state, ex) => {
      state.loading = false;
      console.log(ex);
    },
  },
});

export const {homePageBegin, homePageSuccess, homePageErr} = homeSlice.actions;
export default homeSlice.reducer;
