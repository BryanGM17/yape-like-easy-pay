
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Leaf, Award, Trophy } from 'lucide-react';

interface LevelProgressProps {
  currentPoints: number;
  currentLevel: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ currentPoints, currentLevel }) => {
  // Define levels thresholds
  const levels = [
    { level: 1, points: 100, title: "Principiante Eco", icon: <Leaf size={24} className="text-green-500" /> },
    { level: 2, points: 200, title: "Reciclador Regular", icon: <Leaf size={24} className="text-green-600" /> },
    { level: 3, points: 300, title: "Eco Entusiasta", icon: <Award size={24} className="text-amber-500" /> },
    { level: 4, points: 400, title: "Maestro Verde", icon: <Trophy size={24} className="text-amber-600" /> },
    { level: 5, points: 500, title: "Campeón Ecológico", icon: <Trophy size={24} className="text-eco-primary" /> },
  ];

  // Calculate the next level data
  const currentLevelData = levels.find(l => l.level === currentLevel) || levels[0];
  const nextLevelData = levels.find(l => l.level === currentLevel + 1) || levels[levels.length - 1];
  
  // Calculate progress percentage to the next level
  const calculateProgress = () => {
    if (currentLevel >= levels.length) return 100;
    
    const prevLevelPoints = currentLevel > 1 
      ? levels.find(l => l.level === currentLevel - 1)?.points || 0
      : 0;
      
    const pointsInCurrentLevel = currentPoints - prevLevelPoints;
    const pointsRequiredForNextLevel = nextLevelData.points - currentLevelData.points;
    
    return Math.min(Math.floor((pointsInCurrentLevel / pointsRequiredForNextLevel) * 100), 100);
  };

  const progress = calculateProgress();
  const pointsToNextLevel = nextLevelData.points - currentPoints;

  return (
    <div className="bg-white p-4 rounded-xl card-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-eco-light flex items-center justify-center mr-3">
            {currentLevelData.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              Nivel {currentLevel}: {currentLevelData.title}
            </h3>
            <p className="text-xs text-gray-500">
              {currentPoints} puntos acumulados
            </p>
          </div>
        </div>
        <div className="text-2xl font-bold text-eco-primary">{currentLevel}</div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-1 text-xs text-gray-600">
          <span>Progreso al nivel {currentLevel + 1}</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
            {nextLevelData.icon}
          </div>
          <div>
            <p className="text-sm font-medium">Próximo nivel: {nextLevelData.title}</p>
            {pointsToNextLevel > 0 ? (
              <p className="text-xs text-gray-500">Necesitas {pointsToNextLevel} puntos más</p>
            ) : (
              <p className="text-xs text-green-600 font-medium">¡Nivel completado!</p>
            )}
          </div>
        </div>
        <div className="text-xl font-bold text-gray-400">{currentLevel + 1}</div>
      </div>
    </div>
  );
};

export default LevelProgress;
