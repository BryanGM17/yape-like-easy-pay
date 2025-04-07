
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();

  const userInfo = {
    name: "Camila Rodriguez",
    email: "camila.rodriguez@example.com",
    phone: "+51 987 654 321",
    address: "Av. Javier Prado 2456, San Isidro, Lima",
    birthday: "15 de Mayo, 1990",
    joinDate: "12 de Enero, 2023"
  };

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
        <h1 className="text-lg font-semibold flex-1 text-center">Información Personal</h1>
        <div className="w-6"></div>
      </div>

      <div className="p-6 flex flex-col items-center bg-white mb-4">
        <div className="w-20 h-20 rounded-full bg-eco-light flex items-center justify-center mb-3">
          <span className="text-eco-primary text-xl font-bold">CR</span>
        </div>
        <h2 className="text-xl font-bold">{userInfo.name}</h2>
        <p className="text-gray-500">Usuario desde {userInfo.joinDate}</p>
      </div>

      <div className="container mx-auto max-w-md px-4">
        <div className="bg-white rounded-xl card-shadow mb-6">
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-700">Datos de contacto</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 text-eco-primary"
                onClick={() => {}}
              >
                <Edit2 size={16} className="mr-1" />
                Editar
              </Button>
            </div>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-center">
                <Mail className="text-gray-400 mr-3" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Correo electrónico</p>
                  <p className="font-medium">{userInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-400 mr-3" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Teléfono</p>
                  <p className="font-medium">{userInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-gray-400 mr-3" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Dirección</p>
                  <p className="font-medium">{userInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="text-gray-400 mr-3" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Fecha de nacimiento</p>
                  <p className="font-medium">{userInfo.birthday}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold text-gray-700 mb-3">Preferencias</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Recibir notificaciones</span>
                <div className="w-12 h-6 bg-eco-primary rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Emails promocionales</span>
                <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Recordatorios diarios</span>
                <div className="w-12 h-6 bg-eco-primary rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default PersonalInfo;
