
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const PaymentMethod: React.FC<{
  id: number;
  name: string;
  number: string;
  isDefault: boolean;
  expires: string;
  icon: React.ReactNode;
}> = ({ name, number, isDefault, expires, icon }) => (
  <div className="bg-white rounded-xl p-4 mb-3 card-shadow flex items-center">
    <div className="mr-4 text-eco-primary">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center">
        <p className="font-medium">{name}</p>
        {isDefault && (
          <span className="ml-2 bg-eco-light text-eco-primary text-xs px-2 py-0.5 rounded-full">
            Principal
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500">{number}</p>
      <p className="text-xs text-gray-500">Expira: {expires}</p>
    </div>
    <CheckCircle size={20} className={isDefault ? "text-eco-primary" : "text-gray-300"} />
  </div>
);

const PaymentMethods: React.FC = () => {
  const navigate = useNavigate();

  const paymentMethods = [
    {
      id: 1,
      name: "Visa",
      number: "•••• •••• •••• 4587",
      isDefault: true,
      expires: "12/25",
      icon: <CreditCard size={24} />
    },
    {
      id: 2,
      name: "Mastercard",
      number: "•••• •••• •••• 7823",
      isDefault: false,
      expires: "08/24",
      icon: <CreditCard size={24} />
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
        <h1 className="text-lg font-semibold flex-1 text-center">Métodos de pago</h1>
        <div className="w-6"></div>
      </div>

      <div className="container mx-auto max-w-md px-4 mt-4">
        <Button 
          className="w-full mb-4 flex items-center justify-center bg-eco-primary hover:bg-eco-primary/90"
          onClick={() => {}}
        >
          <Plus size={18} className="mr-1" />
          Agregar método de pago
        </Button>

        <div className="mb-2 text-sm font-medium text-gray-600">Tus métodos de pago</div>
        
        {paymentMethods.map((method) => (
          <PaymentMethod 
            key={method.id}
            id={method.id}
            name={method.name}
            number={method.number}
            isDefault={method.isDefault}
            expires={method.expires}
            icon={method.icon}
          />
        ))}

        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Información importante</h3>
          <div className="bg-white rounded-xl p-4 card-shadow">
            <p className="text-xs text-gray-600 mb-2">
              Tus métodos de pago se utilizan únicamente para la compra de productos en la tienda y redención de puntos.
            </p>
            <p className="text-xs text-gray-600">
              La información de tus tarjetas está encriptada y protegida según los más altos estándares de seguridad.
            </p>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default PaymentMethods;
