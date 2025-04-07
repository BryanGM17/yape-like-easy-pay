
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, FingerPrint, Eye, EyeOff, Key, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const SecuritySettings: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

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
        <h1 className="text-lg font-semibold flex-1 text-center">Seguridad</h1>
        <div className="w-6"></div>
      </div>

      <div className="container mx-auto max-w-md px-4 mt-4">
        <div className="bg-white rounded-xl overflow-hidden card-shadow mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold mb-4">Cambiar contraseña</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Contraseña actual</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="w-full border border-gray-300 rounded-lg p-2 pr-10" 
                    value="••••••••"
                    readOnly
                  />
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Nueva contraseña</label>
                <input 
                  type="password" 
                  className="w-full border border-gray-300 rounded-lg p-2" 
                  placeholder="Ingresa nueva contraseña"
                />
              </div>
              
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Confirmar contraseña</label>
                <input 
                  type="password" 
                  className="w-full border border-gray-300 rounded-lg p-2" 
                  placeholder="Confirma nueva contraseña"
                />
              </div>
              
              <Button className="w-full bg-eco-primary hover:bg-eco-primary/90">
                Actualizar contraseña
              </Button>
            </div>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold mb-3">Autenticación de dos factores</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock size={20} className="text-eco-primary mr-2" />
                <div>
                  <p className="text-sm">Verificación en dos pasos</p>
                  <p className="text-xs text-gray-500">Añade seguridad extra a tu cuenta</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-eco-primary rounded-full relative">
                <div className="absolute right-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FingerPrint size={20} className="text-eco-primary mr-2" />
                <div>
                  <p className="text-sm">Autenticación biométrica</p>
                  <p className="text-xs text-gray-500">Usa tu huella digital para acceder</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-eco-primary rounded-full relative">
                <div className="absolute right-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Key size={20} className="text-eco-primary mr-2" />
                <div>
                  <p className="text-sm">Código de acceso PIN</p>
                  <p className="text-xs text-gray-500">Usa un PIN de 4 dígitos</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start">
          <AlertCircle size={20} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-700">
            Mantén tu información segura. Nunca compartas tus credenciales con otras personas y cambia tu contraseña periódicamente.
          </p>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default SecuritySettings;
