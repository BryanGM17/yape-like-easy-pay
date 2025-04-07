
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Award, Target, Star, Badge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navigation from '../components/Navigation';
import { useIsMobile } from '@/hooks/use-mobile';

const achievements = [
  {
    id: 1,
    title: "Novato Ecológico",
    description: "Reciclaste tus primeras 10 botellas",
    icon: <Badge className="text-eco-primary" size={24} />,
    progress: 100,
    completed: true
  },
  {
    id: 2,
    title: "Defensor del Planeta",
    description: "Reciclaste 50 botellas en total",
    icon: <Award className="text-eco-secondary" size={24} />,
    progress: 90, // 45 de 50
    completed: false
  },
  {
    id: 3,
    title: "Maestro Reciclador",
    description: "Reciclaste durante 5 días consecutivos",
    icon: <Trophy className="text-amber-500" size={24} />,
    progress: 80, // 4 de 5
    completed: false
  },
  {
    id: 4,
    title: "Influencer Verde",
    description: "Comparte la app con 3 amigos",
    icon: <Star className="text-purple-500" size={24} />,
    progress: 33, // 1 de 3
    completed: false
  },
  {
    id: 5,
    title: "Ecologista Experto",
    description: "Recicla 100 botellas en total",
    icon: <Trophy className="text-green-600" size={24} />,
    progress: 45, // 45 de 100
    completed: false
  },
  {
    id: 6,
    title: "Guerrero del Reciclaje",
    description: "Recicla 10 botellas en un solo día",
    icon: <Award className="text-blue-500" size={24} />,
    progress: 70, // 7 de 10
    completed: false
  },
  {
    id: 7,
    title: "Defensor de Océanos",
    description: "Evita que 20kg de plástico lleguen al océano",
    icon: <Badge className="text-cyan-600" size={24} />,
    progress: 55, // 11kg de 20kg
    completed: false
  },
  {
    id: 8,
    title: "Guardián de la Tierra",
    description: "Recicla durante un mes consecutivo",
    icon: <Target className="text-eco-accent" size={24} />,
    progress: 20, // 6 días de 30
    completed: false
  }
];

const Achievements: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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
        <h1 className="text-lg font-semibold flex-1 text-center">Mis Logros</h1>
        <div className="w-6"></div>
      </div>

      <div className="p-4 bg-eco-light">
        <div className="bg-white rounded-xl p-4 mb-4 card-shadow">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-eco-light flex items-center justify-center mr-4">
              <Trophy className="text-eco-primary" size={24} />
            </div>
            <div>
              <h2 className="font-bold text-lg">Nivel 3</h2>
              <p className="text-sm text-gray-600">Has desbloqueado 1 de 8 logros</p>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={32} className="h-2" />
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>Progreso total: 32%</span>
              <span>Siguiente nivel: 68%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-xl p-4 card-shadow">
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  achievement.completed ? 'bg-eco-light' : 'bg-gray-100'
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-md">{achievement.title}</h3>
                    {achievement.completed && (
                      <Badge className="bg-eco-primary text-white px-2 py-1 text-xs rounded-full">
                        Completado
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                  <div className="w-full">
                    <Progress value={achievement.progress} className="h-2" />
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">
                        {achievement.completed ? 'Completado' : 'En progreso'}
                      </p>
                      <p className="text-xs font-medium">
                        {achievement.progress}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Achievements;
