import React from 'react';
import { BarChartComp } from '../../../5-Features/pages/chartBar/BarChartComp';
import { Header } from '../../../7-Shared/ui/Header';

interface IBarChart {}

const BarChart: React.FC<IBarChart> = (props) => {
  return (
    <div
      style={{ width: 'calc(100vw - 300px)', height: 'calc(100vh - 100px)' }}
    >
      <>
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <BarChartComp isDashboard={true} />
      </>
    </div>
  );
};

export default BarChart;
