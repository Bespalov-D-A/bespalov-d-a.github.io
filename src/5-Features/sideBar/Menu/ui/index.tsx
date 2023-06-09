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
    <Box pl={!collapsed ? undefined : '10%'}>
      <Item
        title="Dashboard"
        to="/dashboard"
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
        to="/dashboard/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Contacts Information"
        to="/dashboard/contacts"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Invoices Balances"
        to="/dashboard/invoices"
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
        to="/dashboard/create-user"
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Calendar"
        to="/dashboard/calendar"
        icon={<CalendarTodayOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="FAQ Page"
        to="/dashboard/faq"
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
        to="/dashboard/bar"
        icon={<BarChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Pie Chart"
        to="/dashboard/pie"
        icon={<PieChartOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Line Chart"
        to="/dashboard/line"
        icon={<TimelineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Geography Chart"
        to="/dashboard/geography"
        icon={<MapOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
};

export default MenuBlock;
