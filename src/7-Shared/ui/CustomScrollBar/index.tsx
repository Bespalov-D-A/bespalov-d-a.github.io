import useTheme from '@mui/material/styles/useTheme';
import React, { useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

interface IScrollBar {
  component: () => React.ReactElement;
}

//Кастомный скролбар, для компонентов с прокруткой
//Подстраивается под размер родителя
const CustomScrollBar: React.FC<IScrollBar> = ({ component }) => {
  const theme = useTheme();
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
      //onUpdate={() => setUpdate(true)}
      ref={scrollbarsRef}
      autoHide={false}
      style={{ width: '100%', height: '100%' }}
      renderThumbVertical={(style, ...props) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: theme.palette.secondary.dark,
            position: 'relative',
            zIndex: 10,
            opacity: '0.7',
          }}
        />
      )}
    >
      {component()}
    </Scrollbars>
  );
};

export default CustomScrollBar;
