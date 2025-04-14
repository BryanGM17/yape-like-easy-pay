
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, ChevronRight } from 'lucide-react';

const RecyclingProgress: React.FC = () => {
  const navigate = useNavigate();
  const [userPoints, setUserPoints] = useState(200);
  
  // Load user points from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('userPoints');
    if (savedPoints) {
      setUserPoints(parseInt(savedPoints));
    }
  }, []);

  // Function to get current user level based on points
  const getCurrentUserLevel = () => {
    if (userPoints >= 400) return 4;
    if (userPoints >= 300) return 3;
    if (userPoints >= 200) return 2;
    if (userPoints >= 100) return 1;
    return 1;
  };

  // Calculate progress to next level
  const calculateProgress = () => {
    const currentLevel = getCurrentUserLevel();
    const nextLevelThreshold = (currentLevel + 1) * 100;
    const prevLevelThreshold = currentLevel * 100;
    
    const pointsInCurrentLevel = userPoints - prevLevelThreshold;
    const pointsRequiredForNextLevel = nextLevelThreshold - prevLevelThreshold;
    
    return Math.floor((pointsInCurrentLevel / pointsRequiredForNextLevel) * 100);
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl p-4 card-shadow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Tu Progreso</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-eco-primary p-0"
            onClick={() => navigate('/achievements')}
          >
            Ver todos <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 rounded-full bg-eco-light flex items-center justify-center mr-3">
            <Leaf className="text-eco-primary" size={24} />
          </div>
          <div>
            <p className="font-medium">Nivel {getCurrentUserLevel()}</p>
            <p className="text-xs text-gray-500">{userPoints} puntos acumulados</p>
          </div>
          <div className="ml-auto">
            <Button 
              size="sm" 
              className="bg-eco-primary hover:bg-eco-primary/90"
              onClick={() => navigate('/transfer')}
            >
              Reciclar
            </Button>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Nivel {getCurrentUserLevel()}</span>
            <span>Nivel {getCurrentUserLevel() + 1}</span>
          </div>
          <Progress value={calculateProgress()} className="h-2" />
          <p className="text-xs text-center mt-1 text-gray-500">
            {100 - (calculateProgress() % 100)}% para el siguiente nivel
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecyclingProgress;
