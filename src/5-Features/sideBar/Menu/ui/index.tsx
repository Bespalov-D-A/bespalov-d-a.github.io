import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import React from 'react';
import Box from '@mui/material/Box';
import Item from './MenuItem';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { InewTheme } from '../../../../7-Shared/assets/mui/WithTheme';

interface IMenu {
  collapsed: boolean;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const MenuBlock: React.FC<IMenu> = (props) => {
  const { collapsed, selected, setSelected } = props;
  const theme = useTheme() as InewTheme;
  return (
    <Box>
      <Item
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography
        variant="h6"
        color={theme.palette.additionalColors.grey[300]}
        sx={{ m: '15px 0 5px 20px' }}
      >
        Data
      </Typography>
      <Item
        title="Manage Team"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Contacts Information"
        to="/contacts"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Invoices Balances"
        to="/invoices"
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography
        variant="h6"
        color={theme.palette.additionalColors.grey[300]}
        sx={{ m: '15px 0 5px 20px' }}
      >
        Pages
      </Typography>
      <Item
        title="Profile Form"
        to="/form"
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Calendar"
        to="/calendar"
        icon={<CalendarTodayOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="FAQ Page"
        to="/faq"
        icon={<HelpOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography
        variant="h6"
        color={theme.palette.additionalColors.grey[300]}
        sx={{ m: '15px 0 5px 20px' }}
      >
        Charts
      </Typography>
      <Item
        title="Bar Chart"
        to="/bar"
        icon={<BarChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Pie Chart"
        to="/pie"
        icon={<PieChartOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Line Chart"
        to="/line"
        icon={<TimelineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Geography Chart"
        to="/geography"
        icon={<MapOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
};

export default MenuBlock;
