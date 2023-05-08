import React from 'react';
import { AccordionComponent } from '../../../5-Features/pages/faq/AccordionComponent';
import { Header } from '../../../7-Shared/ui/Header';

interface IFaq {}

const Faq: React.FC<IFaq> = (props) => {
  return (
    <>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <AccordionComponent />
    </>
  );
};

export default Faq;
