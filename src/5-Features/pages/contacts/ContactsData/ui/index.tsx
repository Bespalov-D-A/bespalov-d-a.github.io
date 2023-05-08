import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import useTheme from '@mui/material/styles/useTheme';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { GridToolbar } from '@mui/x-data-grid/components/toolbar/GridToolbar';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import React from 'react';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';
import { mockDataContacts } from '../../../../../7-Shared/data/mocks/data/text/mockData';

interface ICustomTooltip extends TooltipProps {}

const CustomTooltip: React.FC<ICustomTooltip> = (props) => {
  const theme = useTheme() as InewTheme;
  const { title, children, ...rest } = props;

  return (
    <Tooltip
      sx={{
        backgroundColor: 'red !important',
        '& .MuiPaper-root': {
          background: 'red !important',
          color: `${theme.palette.additionalColors.grey[100]} !important`,
        },
      }}
      title={title}
      {...rest}
    >
      <></>
    </Tooltip>
  );
};

interface IContactsData {}

const ContactsData: React.FC<IContactsData> = (props) => {
  const theme = useTheme() as InewTheme;
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
    },
  ];
  return (
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        '& .MuiDataGrid-root': {
          border: 'none',
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none',
        },
        '& .name-column--cell': {
          color: theme.palette.additionalColors.greenAccent[300],
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: theme.palette.additionalColors.blueAccent[700],
          borderBottom: 'none',
        },
        '& .MuiDataGrid-virtualScroller': {
          backgroundColor: theme.palette.additionalColors.primary[400],
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
          backgroundColor: theme.palette.additionalColors.blueAccent[700],
        },
        '& .MuiSwitch-root .MuiButtonBase-root': {
          color: `${theme.palette.additionalColors.blueAccent[100]} !important`,
        },

        '& .MuiCheckbox-root': {
          color: `${theme.palette.additionalColors.greenAccent[200]} !important`,
        },
        '& .MuiDataGrid-toolbarContainer button': {
          color: `${theme.palette.additionalColors.grey[100]} !important`,
        },
      }}
    >
      <DataGrid
        checkboxSelection
        rows={mockDataContacts}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
          BasePopper: (props) => (
            <Popper
              sx={{
                '&  .MuiFormLabel-root': {
                  color: `${theme.palette.additionalColors.greenAccent[600]} !important`,
                },
                '&  .MuiSwitch-track': {
                  background: `${theme.palette.additionalColors.blueAccent[200]} !important`,
                },
                '& .MuiSwitch-thumb': {
                  color: `${theme.palette.additionalColors.blueAccent[200]} !important`,
                },
                '& .MuiButton-text': {
                  color: `${theme.palette.additionalColors.grey[100]} !important`,
                },
              }}
              {...props}
            />
          ),
        }}
      />
    </Box>
  );
};

export default ContactsData;
