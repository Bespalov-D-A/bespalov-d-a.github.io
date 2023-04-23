import React from 'react';
import { useThemeState } from '../../6-Entities/Common';

const MainPage = () => {
  const setTheme = useThemeState((state) => state.setToken);
  const token = useThemeState((state) => state.token);
  return (
    <div
      style={{ background: 'red', width: 100, height: 3000 }}
      onClick={() => setTheme(token === 'dark' ? 'light' : 'dark')}
    >
      MainPage aa fsd sd
    </div>
  );
};

export default MainPage;
