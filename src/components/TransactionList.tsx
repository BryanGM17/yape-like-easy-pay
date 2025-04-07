
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

type Transaction = {
  id: number;
  type: 'in' | 'out';
  amount: string;
  name: string;
  date: string;
  time: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    type: 'in',
    amount: '150.00',
    name: 'Roberto Sánchez',
    date: '07 Abr',
    time: '14:30'
  },
  {
    id: 2,
    type: 'out',
    amount: '75.50',
    name: 'Café Mirasol',
    date: '06 Abr',
    time: '10:15'
  },
  {
    id: 3,
    type: 'in',
    amount: '500.00',
    name: 'María García',
    date: '05 Abr',
    time: '16:45'
  },
  {
    id: 4,
    type: 'out',
    amount: '125.00',
    name: 'Supermercado El Sol',
    date: '02 Abr',
    time: '11:20'
  }
];

const TransactionList: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Movimientos recientes</h2>
      </div>
      <div className="bg-white rounded-xl overflow-hidden card-shadow">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
            <div className="flex items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  transaction.type === 'in' ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                {transaction.type === 'in' ? (
                  <ArrowDown size={20} className="text-green-600" />
                ) : (
                  <ArrowUp size={20} className="text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-xs text-gray-500">{transaction.date} • {transaction.time}</p>
              </div>
            </div>
            <div className={`font-bold ${
              transaction.type === 'in' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'in' ? '+' : '-'} S/ {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
