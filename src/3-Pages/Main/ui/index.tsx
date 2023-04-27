import React from 'react';
import { SideBar } from '../../../4-Widgets/SideBar';
import { TopBar } from '../../../4-Widgets/TopBar';

interface IMainPage {}

const MainPage: React.FC<IMainPage> = (props) => {
  return (
    <div className="app">
      <main className="content">
        <SideBar />
        <TopBar />
      </main>
    </div>
  );
};

export default MainPage;
