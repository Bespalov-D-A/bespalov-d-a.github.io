import { FC } from "react";
import { withProviders } from "./providers";
import "./styles/index.scss";
import { Outlet} from "react-router-dom";

//Входная точка приложения
const App: FC = () => {
  return <Outlet />;
};

//оборачиваем входной компонент App провайдерами
export default withProviders(App)