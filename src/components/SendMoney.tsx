
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Users, CreditCard } from 'lucide-react';

const SendMoney: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    { 
      icon: <Send size={24} className="text-white" />, 
      label: 'Transferir',
      color: 'bg-yape-primary',
      action: () => navigate('/transfer')
    },
    { 
      icon: <Users size={24} className="text-white" />, 
      label: 'Contactos',
      color: 'bg-yape-secondary',
      action: () => {}
    },
    { 
      icon: <CreditCard size={24} className="text-white" />, 
      label: 'Tarjetas',
      color: 'bg-yape-accent',
      action: () => {}
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
