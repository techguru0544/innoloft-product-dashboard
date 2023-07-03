import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../rootReducer';
import { appConfigType } from 'types/configs';

const initialState: appConfigType = {
  loader: true,
  configsData: {
    id: 0,
    logo: '',
    mainColor: '',
    hasUserSection: ''
  }
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    SET_CONFIG_LOADER: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loader: action.payload
    }),
    SET_CONFIG_DATA: (state, action) => ({
      ...state,
      configsData: action.payload
    })
  }
});

export const { SET_CONFIG_LOADER, SET_CONFIG_DATA } = appConfigSlice.actions;

export const CONFIG_DATA = (state: RootState) => state.appConfig;
