import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridCellParams } from '@mui/x-data-grid/models/params/gridCellParams';
import React from 'react';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';
import { mockDataInvoices } from '../../../../../7-Shared/data/mocks/data/text/mockData';
import {
  ImockDataInvoices,
  ImockDataInvoicesItem,
} from '../../../../../7-Shared/data/mocks/types';

interface IInvoicesData {}

const InvoicesData: React.FC<IInvoicesData> = (props) => {
  const theme = useTheme() as InewTheme;
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
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
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params: GridCellParams<ImockDataInvoicesItem>) => (
        <Typography color={theme.palette.additionalColors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
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
        '& .MuiCheckbox-root': {
          color: `${theme.palette.additionalColors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
    </Box>
  );
};

export default InvoicesData;
