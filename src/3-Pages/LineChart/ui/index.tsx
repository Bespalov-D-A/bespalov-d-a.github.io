import React from 'react';
import { LineChartComp } from '../../../5-Features/pages/chartLine/LineChartComp';
import { Header } from '../../../7-Shared/ui/Header';

interface ILineChart {}

const LineChart: React.FC<ILineChart> = (props) => {
  return (
    <div
      style={{ width: 'calc(100vw - 300px)', height: 'calc(100vh - 100px)' }}
    >
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <LineChartComp />
    </div>
  );
};

export default LineChart;
