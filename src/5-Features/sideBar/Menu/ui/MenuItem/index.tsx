import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';

interface IItem {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Item: React.FC<IItem> = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme() as InewTheme;
  return (
    <MenuItem
      active={Boolean(selected === title)}
      style={{
        color: theme.palette.additionalColors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default Item;
