import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/rootReducer';
import { productInitialStateType } from 'types/product';

const initialState: productInitialStateType = {
  loader: true,
  productData: {}
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    SET_PRODUCT_LOADER: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loader: action.payload
    }),
    SET_PRODUCT_DATA: (state, action) => ({
      ...state,
      productData: action.payload
    })
  }
});

export const { SET_PRODUCT_LOADER, SET_PRODUCT_DATA } = productSlice.actions;

export const PRODUCT_DATA = (state: RootState) => state.product;
