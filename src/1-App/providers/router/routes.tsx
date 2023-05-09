import { Navigate } from 'react-router-dom';
import { BarChart } from '../../../3-Pages/BarChart';
import { Calendar } from '../../../3-Pages/Calendar';
import { Contacts } from '../../../3-Pages/Contacts';
import { CreateUser } from '../../../3-Pages/CreateUser';
import { Dashboard } from '../../../3-Pages/Dashboard';
import { Faq } from '../../../3-Pages/Faq';
import { GeoChart } from '../../../3-Pages/GeoChart';
import Invoices from '../../../3-Pages/Invoices/ui';
import { LineChart } from '../../../3-Pages/LineChart';
import { ManageTeam } from '../../../3-Pages/ManageTeam';
import { PieChart } from '../../../3-Pages/PieChart';
import { RootPage } from '../../../3-Pages/Root';

export const routes = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: 'team/', element: <ManageTeam /> },
      { path: 'contacts/', element: <Contacts /> },
      { path: 'invoices/', element: <Invoices /> },
      { path: 'create-user/', element: <CreateUser /> },
      { path: 'calendar/', element: <Calendar /> },
      { path: 'faq/', element: <Faq /> },
      { path: 'bar/', element: <BarChart /> },
      { path: 'pie/', element: <PieChart /> },
      { path: 'line/', element: <LineChart /> },
      { path: 'geography/', element: <GeoChart /> },
    ],
  },
];
