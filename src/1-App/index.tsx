import { FC } from 'react';
import { withProviders } from './providers';
import { Outlet } from 'react-router-dom';
import './styles/index.scss';
import CssBaseline from '@mui/material/CssBaseline';

//Входная точка приложения
const App: FC = () => {
  return (
    <CssBaseline>
      <Outlet />
    </CssBaseline>
  );
};

//оборачиваем входной компонент App провайдерами
export default withProviders(() => <App />);
