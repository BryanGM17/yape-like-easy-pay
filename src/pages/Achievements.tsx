
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Award, Target, Star, Badge, Calendar, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import LevelProgress from '@/components/LevelProgress';
import Navigation from '../components/Navigation';
import { useIsMobile } from '@/hooks/use-mobile';

const Achievements: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
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
    return 0;
  };

  const achievements = [
    {
      id: 1,
      title: "Novato Ecológico",
      description: "Reciclaste tus primeras 10 botellas",
      icon: <Badge className="text-eco-primary" size={24} />,
      progress: 100,
      completed: true,
      category: "reciclaje"
    },
    {
      id: 2,
      title: "Defensor del Planeta",
      description: "Reciclaste 50 botellas en total",
      icon: <Award className="text-eco-secondary" size={24} />,
      progress: 90, // 45 de 50
      completed: false,
      category: "reciclaje"
    },
    {
      id: 3,
      title: "Maestro Reciclador",
      description: "Reciclaste durante 5 días consecutivos",
      icon: <Trophy className="text-amber-500" size={24} />,
      progress: 80, // 4 de 5
      completed: false,
      category: "reciclaje"
    },
    {
      id: 4,
      title: "Influencer Verde",
      description: "Comparte la app con 3 amigos",
      icon: <Star className="text-purple-500" size={24} />,
      progress: 33, // 1 de 3
      completed: false,
      category: "social"
    },
    {
      id: 5,
      title: "Eco Consumidor",
      description: "Realiza 5 compras en la EcoTienda",
      icon: <Gift className="text-eco-primary" size={24} />,
      progress: 40, // 2 de 5
      completed: false,
      category: "tienda"
    },
    {
      id: 6,
      title: "Reciclador Constante",
      description: "Recicla 10 días en un mes",
      icon: <Calendar className="text-blue-500" size={24} />,
      progress: 50, // 5 de 10
      completed: false,
      category: "reciclaje"
    },
    {
      id: 7,
      title: "Embajador Ecológico",
      description: "Comparte 5 publicaciones sobre reciclaje",
      icon: <Star className="text-eco-secondary" size={24} />,
      progress: 20, // 1 de 5
      completed: false,
      category: "social"
    },
    {
      id: 8,
      title: "Comprador Premium",
      description: "Adquiere un producto de nivel 3 o superior",
      icon: <Gift className="text-amber-600" size={24} />,
      progress: 0,
      completed: false,
      category: "tienda"
    },
  ];

  // Filter achievements by category
  const filteredAchievements = (category: string) => {
    return achievements.filter(
      achievement => category === "todos" || achievement.category === category
    );
  };

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="bg-white p-4 flex items-center shadow-sm">
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

      <div className="container mx-auto max-w-md px-4 py-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Mi Nivel</h2>
          <LevelProgress 
            currentPoints={userPoints} 
            currentLevel={getCurrentUserLevel()} 
          />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-1">Mis Logros</h2>
          <p className="text-sm text-gray-500 mb-3">
            Completa desafíos para ganar más puntos y subir de nivel
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="w-full bg-white rounded-lg mb-4">
            <TabsTrigger value="todos" className="flex-1 text-xs">Todos</TabsTrigger>
            <TabsTrigger value="reciclaje" className="flex-1 text-xs">Reciclaje</TabsTrigger>
            <TabsTrigger value="social" className="flex-1 text-xs">Social</TabsTrigger>
            <TabsTrigger value="tienda" className="flex-1 text-xs">Tienda</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-0">
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
              {filteredAchievements("todos").map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reciclaje" className="mt-0">
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
              {filteredAchievements("reciclaje").map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-0">
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
              {filteredAchievements("social").map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tienda" className="mt-0">
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
              {filteredAchievements("tienda").map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Navigation />
    </div>
  );
};

// Achievement Card Component
const AchievementCard: React.FC<{
  achievement: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    progress: number;
    completed: boolean;
  }
}> = ({ achievement }) => {
  return (
    <div className="bg-white rounded-xl p-3 card-shadow">
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
            <div className="flex justify-between mt-1">
              <p className="text-xs text-gray-500">
                {achievement.completed ? "Completado" : `${achievement.progress}%`}
              </p>
              {achievement.completed && (
                <p className="text-xs text-eco-primary font-medium">+25 puntos</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
