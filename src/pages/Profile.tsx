
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, CreditCard, Shield, Settings, HelpCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const ProfileOption: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
  <div 
    className="flex items-center p-4 border-b border-gray-100 cursor-pointer"
    onClick={onClick}
  >
    <div className="mr-4 text-yape-primary">
      {icon}
    </div>
    <div className="flex-1">
      <p className="font-medium">{title}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </div>
);

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const profileOptions = [
    {
      icon: <User size={24} />,
      title: "Información personal",
      description: "Edita tu perfil y datos personales",
      onClick: () => {}
    },
    {
      icon: <CreditCard size={24} />,
      title: "Métodos de pago",
      description: "Administra tus tarjetas y cuentas",
      onClick: () => {}
    },
    {
      icon: <Shield size={24} />,
      title: "Seguridad",
      description: "Configura opciones de seguridad",
      onClick: () => {}
    },
    {
      icon: <Settings size={24} />,
      title: "Configuración",
      description: "Personaliza tu experiencia",
      onClick: () => {}
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Ayuda",
      description: "Consultas y soporte técnico",
      onClick: () => {}
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-white p-4 flex items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mr-2 p-0 h-auto"
        >
          <ArrowLeft className="text-gray-600" />
        </Button>
        <h1 className="text-lg font-semibold flex-1 text-center">Mi perfil</h1>
        <div className="w-6"></div>
      </div>

      <div className="p-6 flex flex-col items-center bg-white mb-4">
        <div className="w-20 h-20 rounded-full bg-yape-light flex items-center justify-center mb-3">
          <User size={36} className="text-yape-primary" />
        </div>
        <h2 className="text-xl font-bold">Camila Rodriguez</h2>
        <p className="text-gray-500">+51 987 654 321</p>
      </div>

      <div className="container mx-auto max-w-md px-4">
        <div className="bg-white rounded-xl overflow-hidden card-shadow mb-6">
          {profileOptions.map((option, index) => (
            <ProfileOption 
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
              onClick={option.onClick}
            />
          ))}
        </div>

        <Button 
          variant="outline"
          className="w-full py-6 text-red-500 font-semibold rounded-xl border-red-200 flex items-center justify-center"
        >
          <LogOut className="mr-2" size={18} />
          Cerrar sesión
        </Button>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;
