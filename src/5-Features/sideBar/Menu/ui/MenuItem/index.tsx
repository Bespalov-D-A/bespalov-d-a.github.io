import useTheme from '@mui/material/styles/useTheme';
import s from './index.module.scss';
import Typography from '@mui/material/Typography';
import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
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
      active={selected === title}
      style={{
        position: 'relative',
        color: theme.palette.additionalColors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <NavLink className={s.lnk} to={to} />
    </MenuItem>
  );
};

export default Item;
