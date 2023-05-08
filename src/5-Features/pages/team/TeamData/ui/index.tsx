import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import React from 'react';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';
import { mockDataTeam } from '../../../../../7-Shared/data/mocks/data/text/mockData';
import AccessCell from './AccessCell';

interface ITeamData {}

const TeamData: React.FC<ITeamData> = (props) => {
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
      field: 'age',
      headerName: 'Age',
      type: 'number',
      // headerAlign: 'left',
      // align: 'left',
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
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }: { [key: string]: any }) => (
        <AccessCell access={access} />
      ),
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
      <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
    </Box>
  );
};

export default TeamData;
