import { combineReducers } from '@reduxjs/toolkit';
import { appConfigSlice } from './reducers/config/app/app.slice';
import { productSlice } from './reducers/products/product.slice';

export const rootReducer = combineReducers({
  appConfig: appConfigSlice.reducer,
  product: productSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
