
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, ShoppingCart, Gift, Trophy } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SendMoney: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const actions = [
    { 
      icon: <Leaf size={isMobile ? 20 : 24} className="text-white" />, 
      label: 'Reciclar',
      color: 'bg-eco-primary',
      action: () => navigate('/transfer')
    },
    { 
      icon: <ShoppingCart size={isMobile ? 20 : 24} className="text-white" />, 
      label: 'Tienda',
      color: 'bg-eco-secondary',
      action: () => navigate('/ecostore')
    },
    { 
      icon: <Gift size={isMobile ? 20 : 24} className="text-white" />, 
      label: 'Premios',
      color: 'bg-eco-accent',
      action: () => navigate('/rewards')
    },
    { 
      icon: <Trophy size={isMobile ? 20 : 24} className="text-white" />, 
      label: 'Logros',
      color: 'bg-amber-500',
      action: () => navigate('/achievements')
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
            <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-full ${action.color} flex items-center justify-center mb-2 hover:animate-pulse-scale`}>
              {action.icon}
            </div>
            <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendMoney;
