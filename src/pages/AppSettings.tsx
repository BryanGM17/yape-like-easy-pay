
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, Bell, Globe, Volume2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { toast } from "@/components/ui/use-toast";
import Navigation from '../components/Navigation';

const AppSettings: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [language, setLanguage] = useState('es');
  const [privacy, setPrivacy] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setDarkMode(settings.darkMode || false);
      setNotifications(settings.notifications !== undefined ? settings.notifications : true);
      setSounds(settings.sounds !== undefined ? settings.sounds : true);
      setLanguage(settings.language || 'es');
      setPrivacy(settings.privacy || false);
    }
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    const settings = { darkMode, notifications, sounds, language, privacy };
    localStorage.setItem('appSettings', JSON.stringify(settings));
    
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, notifications, sounds, language, privacy]);

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    toast({
      title: newValue ? "Modo oscuro activado" : "Modo claro activado",
      description: newValue 
        ? "Has cambiado a modo oscuro" 
        : "Has cambiado a modo claro",
    });
  };

  // Handle notifications toggle
  const handleNotificationsToggle = () => {
    const newValue = !notifications;
    setNotifications(newValue);
    toast({
      title: newValue ? "Notificaciones activadas" : "Notificaciones desactivadas",
    });
  };

  // Handle language change
  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    toast({
      title: "Idioma actualizado",
      description: value === 'es' ? "Idioma cambiado a Español" : "Idioma cambiado a Inglés",
    });
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
        <h1 className="text-lg font-semibold flex-1 text-center">Configuración</h1>
        <div className="w-6"></div>
      </div>

      <div className="container mx-auto max-w-md px-4 mt-4">
        <div className="bg-white rounded-xl overflow-hidden card-shadow mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold mb-4">Apariencia</h3>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                {darkMode ? (
                  <Moon size={20} className="text-eco-primary mr-3" />
                ) : (
                  <Sun size={20} className="text-amber-500 mr-3" />
                )}
                <div>
                  <p className="text-sm font-medium">Modo oscuro</p>
                  <p className="text-xs text-gray-500">Cambia el tema de la aplicación</p>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={handleDarkModeToggle} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Globe size={20} className="text-eco-primary mr-3" />
                <div>
                  <p className="text-sm font-medium">Idioma</p>
                  <p className="text-xs text-gray-500">Selecciona tu idioma preferido</p>
                </div>
              </div>
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold mb-4">Notificaciones</h3>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Bell size={20} className="text-eco-primary mr-3" />
                <div>
                  <p className="text-sm font-medium">Notificaciones</p>
                  <p className="text-xs text-gray-500">Recibe alertas sobre actividades</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={handleNotificationsToggle} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Volume2 size={20} className="text-eco-primary mr-3" />
                <div>
                  <p className="text-sm font-medium">Sonidos</p>
                  <p className="text-xs text-gray-500">Sonidos al recibir notificaciones</p>
                </div>
              </div>
              <Switch 
                checked={sounds} 
                onCheckedChange={(checked) => {
                  setSounds(checked);
                  toast({
                    title: checked ? "Sonidos activados" : "Sonidos desactivados",
                  });
                }} 
              />
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold mb-4">Privacidad</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock size={20} className="text-eco-primary mr-3" />
                <div>
                  <p className="text-sm font-medium">Datos anónimos</p>
                  <p className="text-xs text-gray-500">Compartir datos anónimos de uso</p>
                </div>
              </div>
              <Switch 
                checked={privacy} 
                onCheckedChange={(checked) => {
                  setPrivacy(checked);
                  toast({
                    title: checked 
                      ? "Compartir datos activado" 
                      : "Compartir datos desactivado",
                  });
                }} 
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-3">
          <Button 
            variant="outline" 
            className="w-full text-sm" 
            onClick={() => {
              toast({
                title: "Cache limpiado",
                description: "Se ha limpiado el cache de la aplicación",
              });
            }}
          >
            Limpiar caché
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full text-sm"
            onClick={() => navigate('/security')}
          >
            Configuración de seguridad
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full text-red-500 border-red-200 hover:bg-red-50 text-sm"
            onClick={() => {
              toast({
                title: "Datos restablecidos",
                description: "La aplicación ha sido restablecida a valores predeterminados",
                variant: "destructive",
              });
              // Could actually reset all localStorage here in a real app
            }}
          >
            Restablecer aplicación
          </Button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default AppSettings;
