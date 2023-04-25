import CssBaseline from '@mui/material/CssBaseline';
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
  const theme = useContext<InewTheme | null>(ThemeContext);
  const [update, setUpdate] = useState<boolean>(false);
  const scrollbarsRef = useRef<Scrollbars>(null);

  function scrollTo() {
    if (scrollbarsRef.current) {
      scrollbarsRef.current.scrollToBottom();
      scrollbarsRef.current.scrollToTop();
    }
  }

  useEffect(() => {
    if (!update) scrollTo();
  }, [update]);

  return (
    <Scrollbars
      onUpdate={() => setUpdate(true)}
      ref={scrollbarsRef}
      autoHide={false}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme?.palette.additionalColors.primary[400],
      }}
      renderThumbVertical={(style, ...props) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: theme?.palette?.neutral.dark,
            position: 'relative',
            zIndex: 10,
            opacity: '0.7',
          }}
        />
      )}
    >
      <CssBaseline>{component()}</CssBaseline>
    </Scrollbars>
  );
};

export default CustomScrollBar;
