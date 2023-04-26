import compose from 'compose-function';
import { WithMuiStyled } from './mui/WithStyled';
import CustomScrollBar from '../../7-Shared/ui/CustomScrollBar';
import React from 'react';
import SidebarProvider from './sidebar';

//композируем все необходимые для приложения провайдеры
export const withProviders = compose(
  (component: React.ReactNode) => <WithMuiStyled component={component} />,
  (component: React.ReactNode) => <SidebarProvider component={component} />,
  (component: () => React.ReactElement) => (
    <CustomScrollBar component={component} />
  )
);
