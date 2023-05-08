import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import { IAccordionItem } from '../types';
import AccordionDetails from '@mui/material/AccordionDetails';

interface IAccordionCreator {
  data: IAccordionItem[];
}

const AccordionCreator: React.FC<IAccordionCreator> = ({ data }) => {
  const AccordionGenerator = (data: any[]) =>
    data.map((item) => (
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={item.icon}>
          <Typography color={item.color} variant={item.variant}>
            {item.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.details}</Typography>
        </AccordionDetails>
      </Accordion>
    ));

  return <div>{AccordionGenerator(data)}</div>;
};

export default AccordionCreator;
