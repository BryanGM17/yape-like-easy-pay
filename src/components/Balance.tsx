
import React, { useState } from 'react';
import { Eye, EyeOff, Leaf } from 'lucide-react';

const Balance: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);

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
            <span className="text-3xl font-bold">450</span>
          ) : (
            <span className="text-3xl font-bold">••••••</span>
          )}
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Equivalente a 4.5 kg de plástico reciclado
        </div>
      </div>
    </div>
  );
};

export default Balance;
