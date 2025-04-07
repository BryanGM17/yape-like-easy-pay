
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Balance: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl p-4 card-shadow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Balance disponible</span>
          <button 
            onClick={() => setShowBalance(!showBalance)}
            className="text-yape-primary"
          >
            {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold mr-2">S/</span>
          {showBalance ? (
            <span className="text-3xl font-bold">2,450.00</span>
          ) : (
            <span className="text-3xl font-bold">••••••</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
