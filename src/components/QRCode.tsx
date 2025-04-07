
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QRCode: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="p-4 flex flex-col items-center cursor-pointer" 
      onClick={() => navigate('/qrscan')}
    >
      <div className="bg-white p-5 rounded-xl w-full flex flex-col items-center card-shadow">
        <div className="yape-gradient p-3 rounded-xl mb-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <rect x="7" y="7" width="3" height="3"/>
            <rect x="14" y="7" width="3" height="3"/>
            <rect x="7" y="14" width="3" height="3"/>
            <rect x="14" y="14" width="3" height="3"/>
          </svg>
        </div>
        <span className="font-semibold text-center">Escanea un código QR</span>
        <span className="text-sm text-gray-500 text-center">Paga fácilmente con QR</span>
      </div>
    </div>
  );
};

export default QRCode;
