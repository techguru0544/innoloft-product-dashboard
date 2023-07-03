export const env = {
  APP_NAME: 'INNOLOFT',
  APP_ID: parseInt(import.meta.env['VITE_APP_ID'] ?? '1'),
  API_URL: import.meta.env['VITE_BACKEND_API_URL']
};

export const BASE_URL = {
  CONFIGURATON: `${env.API_URL}configuration`,
  PRODUCT: `${env.API_URL}product`,
  TRL: `${env.API_URL}trl`
};
