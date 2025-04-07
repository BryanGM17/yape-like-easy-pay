
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Moon, Globe, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const AppSettings: React.FC = () => {
  const navigate = useNavigate();

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
        <h1 className="text-lg font-semibold flex-1 text-center">Configuración</h1>
        <div className="w-6"></div>
      </div>

      <div className="container mx-auto max-w-md px-4 mt-4">
        <div className="bg-white rounded-xl overflow-hidden card-shadow mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold mb-3">Preferencias de la aplicación</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell size={20} className="text-eco-primary mr-2" />
                  <span className="text-sm">Notificaciones push</span>
                </div>
                <div className="w-12 h-6 bg-eco-primary rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Moon size={20} className="text-eco-primary mr-2" />
                  <span className="text-sm">Modo oscuro</span>
                </div>
                <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Volume2 size={20} className="text-eco-primary mr-2" />
                  <span className="text-sm">Sonidos de la aplicación</span>
                </div>
                <div className="w-12 h-6 bg-eco-primary rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold mb-3">Idioma</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Globe size={20} className="text-eco-primary mr-2" />
                <span className="text-sm">Español</span>
              </div>
              <Button variant="ghost" size="sm" className="text-eco-primary">
                Cambiar
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold mb-3">Datos y almacenamiento</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Limpiar caché</span>
                <Button variant="ghost" size="sm" className="text-eco-primary">
                  Limpiar
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Descargar datos</span>
                <Button variant="ghost" size="sm" className="text-eco-primary">
                  Descargar
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl card-shadow mb-6">
          <div className="p-4">
            <h3 className="font-semibold mb-3">Acerca de</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Versión</span>
                <span className="text-sm">2.0.5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Actualizada</span>
                <span className="text-sm">10 abril, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Términos de servicio</span>
                <Button variant="ghost" size="sm" className="text-eco-primary p-0 h-auto">
                  Ver
                </Button>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Política de privacidad</span>
                <Button variant="ghost" size="sm" className="text-eco-primary p-0 h-auto">
                  Ver
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default AppSettings;
