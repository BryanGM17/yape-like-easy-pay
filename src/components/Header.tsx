
import React from 'react';
import { Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <div 
          onClick={() => navigate('/profile')}
          className="w-10 h-10 rounded-full bg-yape-light flex items-center justify-center cursor-pointer"
        >
          <User size={20} className="text-yape-primary" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-gray-500">Hola</p>
          <p className="font-semibold">Camila Rodriguez</p>
        </div>
      </div>
      <div className="relative">
        <Bell className="text-gray-600" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-yape-primary rounded-full flex items-center justify-center text-white text-xs">
          2
        </span>
      </div>
    </header>
  );
};

export default Header;
