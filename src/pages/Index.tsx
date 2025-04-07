
import React from 'react';
import Header from '../components/Header';
import Balance from '../components/Balance';
import SendMoney from '../components/SendMoney';
import QRCode from '../components/QRCode';
import TransactionList from '../components/TransactionList';
import Navigation from '../components/Navigation';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="container mx-auto max-w-md">
        <Balance />
        <SendMoney />
        <QRCode />
        <TransactionList />
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
