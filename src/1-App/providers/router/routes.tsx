import { Navigate } from 'react-router-dom';
import { Dashboard } from '../../../3-Pages/Dashboard';
import { ManageTeam } from '../../../3-Pages/ManageTeam';
import { RootPage } from '../../../3-Pages/Root';

export const routes = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/team',
        element: <ManageTeam />,
      },
    ],
  },
];
