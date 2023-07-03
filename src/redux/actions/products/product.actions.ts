import { AppDispatch } from '../../store';
import { BASE_URL } from 'helper/env';
import { SET_PRODUCT_DATA, SET_PRODUCT_LOADER } from 'redux/reducers/products/product.slice';

const GET_PRODUCT = (productId: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(SET_PRODUCT_LOADER(true));
    fetch(`${BASE_URL.PRODUCT}/${productId}/`)
      .then(response => response.json())
      .then(data => {
        dispatch(SET_PRODUCT_DATA(data));
      })
      .catch(configError => {
        console.log({ configError });
      })
      .finally(() => {
        dispatch(SET_PRODUCT_LOADER(false));
      });
  };
};

const UPDATE_PRODUCT = (productId: number, productPayload: object) => {
  return (dispatch: AppDispatch) => {
    dispatch(SET_PRODUCT_LOADER(true));
    fetch(`${BASE_URL.PRODUCT}/${productId}/`, productPayload)
      .then(response => response.json())
      .then(data => {
        dispatch(SET_PRODUCT_DATA(data));
      })
      .catch(configError => {
        console.log({ configError });
      })
      .finally(() => {
        dispatch(SET_PRODUCT_LOADER(false));
      });
  };
};

export { GET_PRODUCT, UPDATE_PRODUCT };
