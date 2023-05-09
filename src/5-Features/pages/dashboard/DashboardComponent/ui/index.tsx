import Box from '@mui/material/Box';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React from 'react';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';
import { ProgressCircle } from '../../../../../7-Shared/ui/ProgressCircle';
import { StatBox } from '../../../../../7-Shared/ui/StatBox';
import IconButton from '@mui/material/IconButton';
import { mockTransactions } from '../../../../../7-Shared/data/mocks/data/text/mockData';

interface IDashboardComponent {
  lineChart: (arg1: boolean) => React.ReactNode;
  barChart: (arg1: boolean) => React.ReactNode;
  geoChart: (arg1: boolean) => React.ReactNode;
}

const DashboardComponent: React.FC<IDashboardComponent> = ({ lineChart, barChart, geoChart }) => {
  const theme = useTheme() as InewTheme;
  const colors = theme.palette.additionalColors;

  return (
    <div>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress={0.8}
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: 'span 8',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {lineChart(true)}
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
            overflow: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `4px solid ${colors.primary[500]}`,
              colors: colors.grey[100],
            }}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                p="5px 10px"
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  borderRadius: '4px',
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
          }}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size={125} />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: '30px 30px 0 30px' }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            {barChart(true)}
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
          }}
          p="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '15px' }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">{geoChart(true)}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardComponent;
