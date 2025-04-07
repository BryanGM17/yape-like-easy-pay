
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Send, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-around py-3 border-t card-shadow">
      <div 
        onClick={() => navigate('/')}
        className={`flex flex-col items-center cursor-pointer ${isActive('/') ? 'text-yape-primary' : 'text-gray-500'}`}
      >
        <Home size={24} />
        <span className="text-xs mt-1">Inicio</span>
      </div>

      <div 
        onClick={() => navigate('/transfer')}
        className={`flex flex-col items-center cursor-pointer ${isActive('/transfer') ? 'text-yape-primary' : 'text-gray-500'}`}
      >
        <Send size={24} />
        <span className="text-xs mt-1">Enviar</span>
      </div>

      <div 
        onClick={() => navigate('/profile')}
        className={`flex flex-col items-center cursor-pointer ${isActive('/profile') ? 'text-yape-primary' : 'text-gray-500'}`}
      >
        <User size={24} />
        <span className="text-xs mt-1">Perfil</span>
      </div>
    </div>
  );
};

export default Navigation;
