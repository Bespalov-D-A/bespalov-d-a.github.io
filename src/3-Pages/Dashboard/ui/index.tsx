import Box from '@mui/material/Box';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Button from '@mui/material/Button';
import useTheme from '@mui/material/styles/useTheme';
import React from 'react';
import { LineChartComp } from '../../../5-Features/pages/chartLine/LineChartComp';
import { DashboardComponent } from '../../../5-Features/pages/dashboard/DashboardComponent';
import { InewTheme } from '../../../7-Shared/assets/mui/WithTheme';
import { Header } from '../../../7-Shared/ui/Header';
import { BarChartComp } from '../../../5-Features/pages/chartBar/BarChartComp';
import { GeoChartComp } from '../../../5-Features/pages/chartGeo/GeoChartComp';

interface IDashboard {}

const Dashboard: React.FC<IDashboard> = (props) => {
  const theme = useTheme() as InewTheme;
  const colors = theme.palette.additionalColors;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <DashboardComponent
        lineChart={(arg) => <LineChartComp isDashboard={arg} />}
        barChart={(arg) => <BarChartComp isDashboard={arg} />}
        geoChart={(arg) => <GeoChartComp isDashboard={arg} />}
      />
    </>
  );
};

export default Dashboard;
