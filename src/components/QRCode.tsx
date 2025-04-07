
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Leaf, RefreshCw } from 'lucide-react';

const QRCode: React.FC = () => {
  const navigate = useNavigate();
  const dailyGoal = 5;
  const currentProgress = 3;

  // Calculate percentage
  const progressPercentage = (currentProgress / dailyGoal) * 100;

  return (
    <div 
      className="p-4 flex flex-col items-center cursor-pointer" 
      onClick={() => navigate('/qrscan')}
    >
      <div className="bg-white p-5 rounded-xl w-full flex flex-col items-center card-shadow">
        <div className="eco-gradient p-3 rounded-xl mb-3 flex items-center justify-center relative">
          <QrCode size={50} className="text-white" />
          <div className="absolute -top-2 -right-2 bg-white rounded-full h-6 w-6 flex items-center justify-center border-2 border-eco-primary">
            <span className="text-xs font-bold text-eco-primary">{currentProgress}</span>
          </div>
        </div>
        <span className="font-semibold text-center">Escanear EcoBox</span>
        <span className="text-sm text-gray-500 text-center">Gana EcoPoints reciclando botellas</span>
        
        <div className="mt-3 w-full bg-gray-100 rounded-full h-2.5">
          <div 
            className="bg-eco-primary h-2.5 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="mt-2 flex items-center justify-between w-full">
          <span className="text-xs text-gray-500">Meta diaria: {currentProgress}/{dailyGoal}</span>
          <div className="flex items-center bg-eco-light px-3 py-1 rounded-full">
            <RefreshCw size={12} className="text-eco-primary mr-1" />
            <span className="text-eco-primary text-xs">Streak: 3 días</span>
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-center bg-eco-light px-4 py-2 rounded-full">
          <Leaf size={18} className="text-eco-primary mr-2" />
          <span className="text-eco-primary">1 botella = 1 EcoPoint</span>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
