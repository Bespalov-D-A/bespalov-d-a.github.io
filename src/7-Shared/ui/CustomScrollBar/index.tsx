import useTheme from '@mui/material/styles/useTheme';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { InewTheme } from '../../assets/mui/WithTheme';

interface IScrollBar {
  component: () => React.ReactElement;
}

export const ThemeContext = React.createContext<InewTheme | null>(null);

//Кастомный скролбар, для компонентов с прокруткой
//Подстраивается под размер родителя
const CustomScrollBar: React.FC<IScrollBar> = ({ component }) => {
  const theme = useTheme() as InewTheme;
  const [update, setUpdate] = useState<boolean>(false);
  const scrollbarsRef = useRef<Scrollbars>(null);

  function scrollTo() {
    if (scrollbarsRef.current) {
      scrollbarsRef.current.scrollToBottom();
      scrollbarsRef.current.scrollToTop();
    }
  }

  useEffect(() => {
    let time = setTimeout(() => scrollTo(), 100);
    return () => clearTimeout(time);
  }, []);

  return (
    <Scrollbars
      onUpdate={() => setUpdate(!update)}
      ref={scrollbarsRef}
      autoHide={false}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
      }}
      renderThumbVertical={(style, ...props) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: theme.palette.additionalColors.greenAccent[400],
            position: 'relative',
            zIndex: 10,
            opacity: '0.7',
          }}
        />
      )}
    >
      <div
        className="scrollbar-custom"
        style={{ height: '100%', padding: '0 8px 0 0' }}
      >
        {component()}
      </div>
    </Scrollbars>
  );
};

export default CustomScrollBar;
