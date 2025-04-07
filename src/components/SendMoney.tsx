
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, ShoppingCart, Gift } from 'lucide-react';

const SendMoney: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    { 
      icon: <Leaf size={24} className="text-white" />, 
      label: 'Reciclar',
      color: 'bg-eco-primary',
      action: () => navigate('/transfer')
    },
    { 
      icon: <ShoppingCart size={24} className="text-white" />, 
      label: 'Tienda',
      color: 'bg-eco-secondary',
      action: () => navigate('/ecostore')
    },
    { 
      icon: <Gift size={24} className="text-white" />, 
      label: 'Premios',
      color: 'bg-eco-accent',
      action: () => navigate('/rewards')
    }
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        {actions.map((action, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center cursor-pointer"
            onClick={action.action}
          >
            <div className={`w-14 h-14 rounded-full ${action.color} flex items-center justify-center mb-2 hover:animate-pulse-scale`}>
              {action.icon}
            </div>
            <span className="text-sm">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendMoney;
