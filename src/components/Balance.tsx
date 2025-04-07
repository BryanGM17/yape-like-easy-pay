
import React, { useState } from 'react';
import { Eye, EyeOff, Leaf, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Balance: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const ecoPoints = 450;
  const lastWeekPoints = 410;
  const increase = ecoPoints - lastWeekPoints;
  const percentIncrease = Math.round((increase / lastWeekPoints) * 100);

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl p-4 card-shadow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">EcoPoints disponibles</span>
          <button 
            onClick={() => setShowBalance(!showBalance)}
            className="text-eco-primary"
          >
            {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <div className="flex items-baseline">
          <Leaf size={24} className="text-eco-primary mr-2" />
          {showBalance ? (
            <span className="text-3xl font-bold">{ecoPoints}</span>
          ) : (
            <span className="text-3xl font-bold">••••••</span>
          )}
        </div>
        
        <div className="mt-3 bg-gray-50 rounded-lg p-2 flex items-center">
          <div className="mr-2 bg-green-100 rounded-full p-1">
            <TrendingUp size={16} className="text-eco-primary" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Esta semana</span>
              <span className="text-xs font-semibold text-eco-primary">+{increase} ({percentIncrease}%)</span>
            </div>
            <Progress value={80} className="h-1.5 mt-1" />
          </div>
        </div>
        
        <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
          <span>Equivalente a 4.5 kg de plástico reciclado</span>
          <span className="bg-eco-light px-2 py-1 rounded text-eco-primary font-medium">Nivel 3</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
