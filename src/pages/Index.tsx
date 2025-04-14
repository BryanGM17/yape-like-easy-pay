
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Balance from '../components/Balance';
import SendMoney from '../components/SendMoney';
import QRCode from '../components/QRCode';
import TransactionList from '../components/TransactionList';
import Navigation from '../components/Navigation';
import EcoAchievements from '../components/EcoAchievements';
import RecyclingProgress from '../components/RecyclingProgress';
import { useIsMobile } from '../hooks/use-mobile';

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  const [userPoints, setUserPoints] = useState(200);
  
  // Load saved points from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('userPoints');
    if (savedPoints) {
      setUserPoints(parseInt(savedPoints));
    }
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="container mx-auto max-w-md">
        <Balance />
        <div className="px-4 py-2">
          <div className="eco-gradient rounded-xl p-4 text-white">
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">¡Haz reciclado 45 botellas!</h3>
                <p className="text-sm opacity-90 mb-2">Has contribuido a reducir 4.5 kg de plástico</p>
                <div className="bg-white/20 rounded-lg p-2 text-sm flex items-center">
                  <div className="mr-2 bg-white/30 rounded-full h-8 w-8 flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                  <div>
                    <span className="block text-xs">Próximo nivel</span>
                    <span className="block font-semibold">50 botellas para Nivel 4</span>
                  </div>
                </div>
              </div>
              {!isMobile && (
                <div className="ml-4 bg-white/20 rounded-full h-16 w-16 flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <SendMoney />
        <RecyclingProgress />
        <EcoAchievements />
        <QRCode />
        <TransactionList />
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
