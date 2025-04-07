
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '../components/Navigation';

const contacts = [
  { id: 1, name: 'María García', phone: '987654321', recent: true },
  { id: 2, name: 'Roberto Sánchez', phone: '912345678', recent: true },
  { id: 3, name: 'Ana López', phone: '945678123', recent: false },
  { id: 4, name: 'Juan Pérez', phone: '978123456', recent: false },
  { id: 5, name: 'Carla Martínez', phone: '965432187', recent: false },
];

const Transfer: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  const recentContacts = contacts.filter(contact => contact.recent);

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
        <h1 className="text-lg font-semibold flex-1 text-center">Transferir dinero</h1>
        <div className="w-6"></div>
      </div>

      <div className="container mx-auto max-w-md p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            className="pl-10 bg-gray-100 border-gray-200"
            placeholder="Buscar por nombre o número"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {recentContacts.length > 0 && searchQuery === '' && (
          <>
            <h2 className="text-sm text-gray-500 mb-2">Transferencias recientes</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {recentContacts.map(contact => (
                <div key={contact.id} className="flex flex-col items-center w-16">
                  <div className="w-12 h-12 rounded-full bg-yape-light flex items-center justify-center mb-1">
                    <User size={20} className="text-yape-primary" />
                  </div>
                  <span className="text-xs text-center truncate w-full">{contact.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </>
        )}

        <h2 className="text-sm text-gray-500 mb-2 mt-4">Todos los contactos</h2>
        <div className="bg-white rounded-xl overflow-hidden card-shadow">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <div key={contact.id} className="flex items-center p-4 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 rounded-full bg-yape-light flex items-center justify-center mr-3">
                  <User size={20} className="text-yape-primary" />
                </div>
                <div>
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-xs text-gray-500">{contact.phone}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No se encontraron contactos
            </div>
          )}
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Transfer;
