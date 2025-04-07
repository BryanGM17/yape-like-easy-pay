
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
        <div className="px-4 py-2">
          <div className="eco-gradient rounded-xl p-4 text-white">
            <h3 className="font-bold text-lg mb-1">¡Haz reciclado 45 botellas!</h3>
            <p className="text-sm opacity-90 mb-2">Has contribuido a reducir 4.5 kg de plástico</p>
            <div className="bg-white/20 rounded-lg p-2 text-sm">
              Tu próximo objetivo: 50 botellas para subir al Nivel 4
            </div>
          </div>
        </div>
        <SendMoney />
        <QRCode />
        <TransactionList />
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
