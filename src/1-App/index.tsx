import { FC } from 'react';
import { withProviders } from './providers';
import { Outlet } from 'react-router-dom';
import './styles/index.scss';

//Входная точка приложения
const App: FC = () => {
  return <Outlet />;
};

//оборачиваем входной компонент App провайдерами
export default withProviders(() => <App />);
