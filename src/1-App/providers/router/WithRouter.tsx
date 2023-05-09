import {
  createBrowserRouter,
  createHashRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';
import App from '../..';
import { routes } from './routes';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: App,
      children: routes as NonIndexRouteObject[],
    },
  ],
  { basename: '/dashboard' }
);
