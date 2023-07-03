import { createBrowserRouter } from 'react-router-dom';
import AppLayout from 'layouts/AppLayout';
import Home from 'pages/Home';
import ErrorPage from 'components/common/ErrorPage';
import ProductDetails from 'pages/productView/ProductDetails';
import { DASHBOARD_ROUTE, PRODUCT_ROUTE, SYSTEM } from './bashRoutes';

const routes = createBrowserRouter([
  {
    path: SYSTEM.HOME,
    element: <AppLayout />,
    children: [
      {
        path: DASHBOARD_ROUTE.HOME,
        element: <Home />
      },
      {
        path: PRODUCT_ROUTE.PRODUCT_VIEW,
        element: <ProductDetails />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

export default routes;
