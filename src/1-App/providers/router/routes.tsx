import { Navigate } from 'react-router-dom';
import { MainPage } from '../../../3-Pages/Main';

export const routes = [
  {
    path: '/',
    element: <Navigate to="main/" />,
  },
  {
    path: 'main/',
    element: <MainPage />,
  },
];
