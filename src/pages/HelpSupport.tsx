
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, PhoneCall, Mail, FileText, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const FAQItem: React.FC<{
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-100 py-3">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-medium text-sm">{question}</h4>
        <ChevronRight 
          size={18} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
        />
      </div>
      {isOpen && (
        <p className="text-sm text-gray-600 mt-2 pl-1">
          {answer}
        </p>
      )}
    </div>
  );
};

const HelpSupport: React.FC = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "¿Cómo funciona el reciclaje de botellas?",
      answer: "Simplemente acércate a cualquier EcoBox, escanea el código QR en la app, deposita la botella en la máquina y recibirás EcoPoints en tu cuenta automáticamente."
    },
    {
      question: "¿Dónde puedo encontrar un EcoBox?",
      answer: "Puedes ver todos los EcoBox disponibles en la sección Reciclar de la app, donde aparecerán en un mapa con las ubicaciones más cercanas a ti."
    },
    {
      question: "¿Cuántos EcoPoints recibo por botella?",
      answer: "Actualmente recibes 1 EcoPoint por cada botella de plástico reciclada correctamente. Los puntos se acreditan inmediatamente en tu cuenta."
    },
    {
      question: "¿Cómo canjeo mis EcoPoints?",
      answer: "Puedes canjear tus EcoPoints en la sección Tienda. Allí encontrarás productos, servicios y descuentos disponibles según tu nivel y cantidad de puntos."
    },
    {
      question: "¿Qué tipo de botellas puedo reciclar?",
      answer: "Puedes reciclar botellas de plástico PET (como las de refrescos y agua) completamente vacías y sin etiquetas grandes."
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
        <h1 className="text-lg font-semibold flex-1 text-center">Ayuda</h1>
        <div className="w-6"></div>
      </div>

      <div className="container mx-auto max-w-md px-4 mt-4">
        <div className="bg-white rounded-xl card-shadow mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold mb-3">Contáctanos</h3>
            <div className="space-y-3">
              <div className="flex items-center p-2 border border-gray-200 rounded-lg">
                <MessageSquare size={20} className="text-eco-primary mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Chat en vivo</p>
                  <p className="text-xs text-gray-500">Disponible 9am - 6pm</p>
                </div>
                <Button variant="ghost" size="sm" className="text-eco-primary">
                  Iniciar
                </Button>
              </div>
              
              <div className="flex items-center p-2 border border-gray-200 rounded-lg">
                <PhoneCall size={20} className="text-eco-primary mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Llámanos</p>
                  <p className="text-xs text-gray-500">+51 (01) 123-4567</p>
                </div>
                <Button variant="ghost" size="sm" className="text-eco-primary">
                  Llamar
                </Button>
              </div>
              
              <div className="flex items-center p-2 border border-gray-200 rounded-lg">
                <Mail size={20} className="text-eco-primary mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Correo electrónico</p>
                  <p className="text-xs text-gray-500">soporte@ecoapp.com</p>
                </div>
                <Button variant="ghost" size="sm" className="text-eco-primary">
                  Escribir
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold mb-3">Preguntas frecuentes</h3>
            <div>
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            
            <Button 
              className="w-full mt-4 bg-eco-light text-eco-primary hover:bg-eco-light/80"
              variant="outline"
            >
              <FileText size={18} className="mr-2" />
              Ver todas las preguntas frecuentes
            </Button>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default HelpSupport;
