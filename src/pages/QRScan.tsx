
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const QRScan: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 flex flex-col">
      <div className="bg-white p-4 flex items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mr-2 p-0 h-auto"
        >
          <ArrowLeft className="text-gray-600" />
        </Button>
        <h1 className="text-lg font-semibold flex-1 text-center">Escanear QR</h1>
        <div className="w-6"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-64 h-64 border-2 border-white relative mb-6">
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-yape-primary"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-yape-primary"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-yape-primary"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yape-primary"></div>
        </div>
        <p className="text-gray-600 text-center max-w-xs">
          Centra el código QR dentro del recuadro para escanear
        </p>
      </div>

      <div className="p-4">
        <Button 
          onClick={() => navigate('/')}
          className="yape-gradient w-full py-6 text-white font-semibold rounded-xl shadow-lg"
        >
          Cancelar
        </Button>
      </div>

      <Navigation />
    </div>
  );
};

export default QRScan;
