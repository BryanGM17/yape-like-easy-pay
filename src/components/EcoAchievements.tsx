
import React from 'react';
import { Trophy, Award, Target, Star, Badge } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
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
  }
];

const EcoAchievements: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Mis Logros</h2>
        <button 
          onClick={() => navigate('/achievements')}
          className="text-eco-primary text-sm font-medium"
        >
          Ver todos
        </button>
      </div>
      
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
        {achievements.slice(0, isMobile ? 2 : 4).map((achievement) => (
          <div 
            key={achievement.id} 
            className="bg-white rounded-xl p-3 card-shadow cursor-pointer hover:bg-gray-50"
            onClick={() => navigate('/achievements')}
          >
            <div className="flex items-start">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                achievement.completed ? 'bg-eco-light' : 'bg-gray-100'
              }`}>
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">{achievement.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{achievement.description}</p>
                <div className="w-full">
                  <Progress value={achievement.progress} className="h-2" />
                  <p className="text-xs text-right mt-1 text-gray-500">
                    {achievement.progress}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoAchievements;
