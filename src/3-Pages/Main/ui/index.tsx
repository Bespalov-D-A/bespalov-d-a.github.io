import React from 'react';
import { TopBar } from '../../../4-Widgets/TopBar';
import s from './index.module.scss';

interface IMainPage {}

const MainPage: React.FC<IMainPage> = (props) => (
  <div className="app">
    <main className="content">
      <TopBar />
    </main>
  </div>
);

export default MainPage;
