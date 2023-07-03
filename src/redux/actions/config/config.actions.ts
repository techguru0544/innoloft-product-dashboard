import {
  SET_CONFIG_DATA,
  SET_CONFIG_LOADER
} from 'redux/reducers/config/app/app.slice';
import { AppDispatch } from '../../store';
import { BASE_URL } from 'helper/env';

const GET_CONFIGURATIONS = (configId: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(SET_CONFIG_LOADER(true));
    fetch(`${BASE_URL.CONFIGURATON}/${configId}/`)
      .then(response => response.json())
      .then(data => {
        dispatch(SET_CONFIG_DATA(data));
      })
      .catch(configError => {
        console.log({ configError });
      })
      .finally(() => {
        dispatch(SET_CONFIG_LOADER(false));
      });
  };
};

export { GET_CONFIGURATIONS };
