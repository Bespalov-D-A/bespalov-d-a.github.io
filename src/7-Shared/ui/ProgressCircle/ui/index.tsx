import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import React from 'react';
import { InewTheme } from '../../../assets/mui/WithTheme';

interface IProgressCircle {
  progress?: number;
  size?: number;
}

const ProgressCircle: React.FC<IProgressCircle> = ({
  progress = 0.75,
  size = 40,
}) => {
  const theme = useTheme() as InewTheme;
  const colors = theme.palette.additionalColors;

  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
