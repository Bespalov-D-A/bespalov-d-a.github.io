import React from 'react';
import { GeoChartComp } from '../../../5-Features/pages/chartGeo/GeoChartComp';
import { Header } from '../../../7-Shared/ui/Header';

interface IGeoChart {}

const GeoChart: React.FC<IGeoChart> = (props) => {
  return (
    <div
      style={{ width: 'calc(100vw - 300px)', height: 'calc(100vh - 100px)' }}
    >
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <GeoChartComp />
    </div>
  );
};

export default GeoChart;
