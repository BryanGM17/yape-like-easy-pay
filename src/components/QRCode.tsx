
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Leaf } from 'lucide-react';

const QRCode: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="p-4 flex flex-col items-center cursor-pointer" 
      onClick={() => navigate('/qrscan')}
    >
      <div className="bg-white p-5 rounded-xl w-full flex flex-col items-center card-shadow">
        <div className="eco-gradient p-3 rounded-xl mb-3 flex items-center justify-center">
          <QrCode size={50} className="text-white" />
        </div>
        <span className="font-semibold text-center">Escanear EcoBox</span>
        <span className="text-sm text-gray-500 text-center">Gana EcoPoints reciclando botellas</span>
        <div className="mt-3 flex items-center justify-center bg-eco-light px-4 py-2 rounded-full">
          <Leaf size={18} className="text-eco-primary mr-2" />
          <span className="text-eco-primary">1 botella = 1 EcoPoint</span>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
