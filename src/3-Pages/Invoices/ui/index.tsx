import React from 'react';
import { InvoicesData } from '../../../5-Features/pages/invoices/InvoicesData';
import { Header } from '../../../7-Shared/ui/Header';

interface IInvoices {}

const Invoices: React.FC<IInvoices> = (props) => {
  return (
    <>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <InvoicesData />
    </>
  );
};

export default Invoices;
