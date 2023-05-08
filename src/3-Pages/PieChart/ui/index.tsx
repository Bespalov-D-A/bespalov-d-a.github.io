import React from 'react';
import PieChartComp from '../../../5-Features/pages/chartPie/PieChartComp/ui';
import { Header } from '../../../7-Shared/ui/Header';

interface IPieChart {}

const PieChart: React.FC<IPieChart> = (props) => {
  return (
    <div
      style={{ width: 'calc(100vw - 300px)', height: 'calc(100vh - 100px)' }}
    >
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <PieChartComp />
    </div>
  );
};

export default PieChart;
