
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Leaf, User, ShoppingCart, Trophy } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      icon: <Home size={isMobile ? 20 : 24} />,
      label: "Inicio",
      path: "/"
    },
    {
      icon: <Leaf size={isMobile ? 20 : 24} />,
      label: "Reciclar",
      path: "/transfer"
    },
    {
      icon: <ShoppingCart size={isMobile ? 20 : 24} />,
      label: "Tienda",
      path: "/ecostore"
    },
    {
      icon: <Trophy size={isMobile ? 20 : 24} />,
      label: "Logros",
      path: "/achievements"
    },
    {
      icon: <User size={isMobile ? 20 : 24} />,
      label: "Perfil",
      path: "/profile"
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-around py-2 border-t card-shadow">
      {navItems.map((item, index) => (
        <div 
          key={index}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center cursor-pointer ${isActive(item.path) ? 'text-eco-primary' : 'text-gray-500'}`}
        >
          {item.icon}
          <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} mt-1`}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
