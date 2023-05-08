import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useTheme from '@mui/material/styles/useTheme';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';
import AccordionCreator from '../../../../../7-Shared/ui/Accorion/ui';

interface IAccordionComponent {}

const AccordionComponent: React.FC<IAccordionComponent> = (props) => {
  const theme = useTheme() as InewTheme;

  const faq = [
    {
      title: 'An Important Question',
      details:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.  ',
      variant: 'h5',
      color: theme.palette.additionalColors.greenAccent[500],
      icon: <ExpandMoreIcon />,
    },
    {
      title: '    Another Important Question',
      details:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.  ',
      variant: 'h5',
      color: theme.palette.additionalColors.greenAccent[500],
      icon: <ExpandMoreIcon />,
    },
    {
      title: 'An Important Question',
      details:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.  ',
      variant: 'h5',
      color: theme.palette.additionalColors.greenAccent[500],
      icon: <ExpandMoreIcon />,
    },
    {
      title: 'Some Random Question',
      details:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.  ',
      variant: 'h5',
      color: theme.palette.additionalColors.greenAccent[500],
      icon: <ExpandMoreIcon />,
    },
    {
      title: 'The Final Question',
      details:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.  ',
      variant: 'h5',
      color: theme.palette.additionalColors.greenAccent[500],
      icon: <ExpandMoreIcon />,
    },
    {
      title: 'An Important Question',
      details:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.  ',
      variant: 'h5',
      color: theme.palette.additionalColors.greenAccent[500],
      icon: <ExpandMoreIcon />,
    },
  ];

  return (
    <div>
      <AccordionCreator data={faq} />
    </div>
  );
};

export default AccordionComponent;
