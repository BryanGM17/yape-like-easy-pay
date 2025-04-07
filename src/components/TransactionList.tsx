
import React from 'react';
import { Leaf, ShoppingCart } from 'lucide-react';

type Transaction = {
  id: number;
  type: 'in' | 'out';
  amount: string;
  name: string;
  date: string;
  time: string;
  description: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    type: 'in',
    amount: '10',
    name: 'EcoBox Centro Lima',
    date: '07 Abr',
    time: '14:30',
    description: 'Reciclaje de 10 botellas'
  },
  {
    id: 2,
    type: 'out',
    amount: '15',
    name: 'EcoStore',
    date: '06 Abr',
    time: '10:15',
    description: 'Compra de bolsa ecológica'
  },
  {
    id: 3,
    type: 'in',
    amount: '5',
    name: 'EcoBox Miraflores',
    date: '05 Abr',
    time: '16:45',
    description: 'Reciclaje de 5 botellas'
  },
  {
    id: 4,
    type: 'out',
    amount: '20',
    name: 'Descuento Café Verde',
    date: '02 Abr',
    time: '11:20',
    description: 'Canje por descuento'
  }
];

const TransactionList: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Actividad reciente</h2>
      </div>
      <div className="bg-white rounded-xl overflow-hidden card-shadow">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
            <div className="flex items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  transaction.type === 'in' ? 'bg-green-100' : 'bg-amber-100'
                }`}
              >
                {transaction.type === 'in' ? (
                  <Leaf size={20} className="text-eco-primary" />
                ) : (
                  <ShoppingCart size={20} className="text-amber-600" />
                )}
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-xs text-gray-500">{transaction.description}</p>
                <p className="text-xs text-gray-400">{transaction.date} • {transaction.time}</p>
              </div>
            </div>
            <div className={`font-bold ${
              transaction.type === 'in' ? 'text-eco-primary' : 'text-amber-600'
            }`}>
              {transaction.type === 'in' ? '+' : '-'} {transaction.amount} <span className="text-xs">EP</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
