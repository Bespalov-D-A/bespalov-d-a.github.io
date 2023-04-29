import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';
import App from '../..';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: App,
    children: routes as NonIndexRouteObject[],
  },
]);
