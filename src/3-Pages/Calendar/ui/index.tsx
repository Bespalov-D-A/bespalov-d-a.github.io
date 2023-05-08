import React from 'react';
import { CalendarComponent } from '../../../5-Features/pages/calendar/CalendarComponent';
import { Header } from '../../../7-Shared/ui/Header';

interface ICaledar {}

const Caledar: React.FC<ICaledar> = (props) => {
  return (
    <>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <CalendarComponent />
    </>
  );
};

export default Caledar;
