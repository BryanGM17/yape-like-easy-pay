
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Leaf, Star, ShoppingBag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import Navigation from '../components/Navigation';
import { useIsMobile } from '@/hooks/use-mobile';

// Product type definition
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  level?: number;
};

// Purchase type
type Purchase = {
  id: number;
  productId: number;
  productName: string;
  price: number;
  date: Date;
};

const EcoStore: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [userPoints, setUserPoints] = useState(200); // Starting with 200 points
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [showSuccess, setShowSuccess] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // Sample product data with actual images
  const products: Product[] = [
    {
      id: 1,
      name: "Bolsa Ecológica",
      description: "Bolsa reutilizable hecha de plástico reciclado",
      price: 50,
      image: "https://images.unsplash.com/photo-1597348989645-46b190ce4918?q=80&w=300",
      category: "productos",
      popular: true
    },
    {
      id: 2,
      name: "Botella Reutilizable",
      description: "Botella de acero inoxidable, reduce tu uso de plástico",
      price: 120,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=300",
      category: "productos",
      level: 2
    },
    {
      id: 3,
      name: "Descuento SuperEco",
      description: "15% de descuento en tiendas afiliadas",
      price: 75,
      image: "https://images.unsplash.com/photo-1612103198005-b733c090de1e?q=80&w=300",
      category: "descuentos",
      popular: true
    },
    {
      id: 4,
      name: "Entrada Museo Ecológico",
      description: "Entrada gratuita al museo ecológico de la ciudad",
      price: 100,
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=300",
      category: "servicios"
    },
    {
      id: 5,
      name: "Planta un Árbol",
      description: "Contribuye a plantar un árbol en zonas reforestadas",
      price: 150,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=300",
      category: "servicios",
      level: 3
    },
    {
      id: 6,
      name: "Descuento EcoRestaurante",
      description: "10% de descuento en restaurantes eco-friendly",
      price: 65,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300",
      category: "descuentos"
    },
    {
      id: 7,
      name: "Kit de Compostaje",
      description: "Comienza a hacer compost en casa con este kit completo",
      price: 90,
      image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=300",
      category: "productos"
    },
    {
      id: 8,
      name: "Curso de Reciclaje",
      description: "Aprende técnicas avanzadas de reciclaje y reutilización",
      price: 130,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=300",
      category: "servicios",
      level: 2
    },
    {
      id: 9,
      name: "Descuento Transporte Verde",
      description: "25% de descuento en alquiler de bicicletas y scooters",
      price: 85,
      image: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?q=80&w=300",
      category: "descuentos",
      popular: true
    },
    {
      id: 10,
      name: "Set de Cubiertos",
      description: "Cubiertos reutilizables de bambú para llevar contigo",
      price: 70,
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=300",
      category: "productos"
    }
  ];

  // Load saved data from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('userPoints');
    if (savedPoints) {
      setUserPoints(parseInt(savedPoints));
    }
    
    const savedPurchases = localStorage.getItem('purchases');
    if (savedPurchases) {
      setPurchases(JSON.parse(savedPurchases));
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('userPoints', userPoints.toString());
    localStorage.setItem('purchases', JSON.stringify(purchases));
  }, [userPoints, purchases]);

  // Function to handle product purchase
  const handlePurchase = (product: Product) => {
    if (userPoints < product.price) {
      toast({
        title: "Puntos insuficientes",
        description: `Necesitas ${product.price - userPoints} puntos más para canjear este producto.`,
        variant: "destructive",
      });
      return;
    }

    // If user has a level requirement
    if (product.level && product.level > getCurrentUserLevel()) {
      toast({
        title: "Nivel insuficiente",
        description: `Necesitas estar en el nivel ${product.level} para canjear este producto.`,
        variant: "destructive",
      });
      return;
    }

    // Process the purchase
    const newPurchase: Purchase = {
      id: Date.now(),
      productId: product.id,
      productName: product.name,
      price: product.price,
      date: new Date()
    };

    setPurchases(prev => [newPurchase, ...prev]);
    setUserPoints(prev => prev - product.price);
    
    // Show success feedback
    setShowSuccess(product.id);
    setTimeout(() => setShowSuccess(null), 2000);

    toast({
      title: "¡Compra exitosa!",
      description: `Has canjeado ${product.name} por ${product.price} puntos.`,
    });
  };

  // Function to get current user level based on points
  const getCurrentUserLevel = () => {
    if (userPoints >= 400) return 4;
    if (userPoints >= 300) return 3;
    if (userPoints >= 200) return 2;
    if (userPoints >= 100) return 1;
    return 0;
  };

  // Filter products based on search and selected category
  const filteredProducts = (category: string) => {
    return products
      .filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(product => category === "todos" || product.category === category);
  };

  // Get popular products
  const popularProducts = products.filter(product => product.popular);

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
        <h1 className="text-lg font-semibold flex-1 text-center">EcoTienda</h1>
        <div className="w-6"></div>
      </div>

      {/* Points Display */}
      <div className="px-4 py-2 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Leaf size={18} className="text-eco-primary mr-2" />
            <span className="font-bold">Tus puntos:</span>
          </div>
          <span className="font-bold text-lg text-eco-primary">{userPoints}</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar productos, descuentos..."
            className="w-full bg-white rounded-lg py-2 pl-10 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-primary focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Gamified Banner */}
      {!searchQuery && (
        <div className="px-4 mb-4">
          <div className="eco-gradient rounded-xl p-4 text-white">
            <div className="flex items-center">
              <div className="mr-3">
                <ShoppingBag size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">¡Desbloquea productos exclusivos!</h3>
                <p className="text-xs opacity-90">Recicla más botellas para subir de nivel</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 bg-white/20 hover:bg-white/30 text-white border-white/30"
                  onClick={() => navigate('/achievements')}
                >
                  Ver mi progreso
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popular Products (Only show if no search query) */}
      {!searchQuery && (
        <div className="px-4 mb-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-md font-semibold">Populares</h2>
            <button className="text-eco-primary text-sm">Ver todos</button>
          </div>
          <div className="overflow-x-auto flex space-x-3 pb-2">
            {popularProducts.map(product => (
              <div key={product.id} className="min-w-[140px] max-w-[140px]">
                <Card className="overflow-hidden">
                  <div className="h-20 bg-gray-200 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1 bg-eco-primary text-white text-xs px-1.5 py-0.5 rounded-full flex items-center">
                      <Star size={10} className="mr-0.5" />
                      <span>Popular</span>
                    </div>
                  </div>
                  <CardContent className="p-2">
                    <h3 className="font-semibold text-xs truncate">{product.name}</h3>
                    <div className="flex items-center mt-1">
                      <Leaf size={12} className="text-eco-primary mr-1" />
                      <span className="font-bold text-xs">{product.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories Tabs */}
      <Tabs defaultValue="todos" className="w-full">
        <div className="px-4">
          <TabsList className="w-full bg-white rounded-lg">
            <TabsTrigger value="todos" className="flex-1 text-xs">Todos</TabsTrigger>
            <TabsTrigger value="productos" className="flex-1 text-xs">Productos</TabsTrigger>
            <TabsTrigger value="servicios" className="flex-1 text-xs">Servicios</TabsTrigger>
            <TabsTrigger value="descuentos" className="flex-1 text-xs">Descuentos</TabsTrigger>
          </TabsList>
        </div>

        {/* All Products Tab */}
        <TabsContent value="todos" className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts("todos").map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isMobile={isMobile}
                onPurchase={handlePurchase}
                showSuccess={showSuccess === product.id}
                userPoints={userPoints}
                userLevel={getCurrentUserLevel()}
              />
            ))}
          </div>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="productos" className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts("productos").map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isMobile={isMobile}
                onPurchase={handlePurchase}
                showSuccess={showSuccess === product.id}
                userPoints={userPoints}
                userLevel={getCurrentUserLevel()}
              />
            ))}
          </div>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="servicios" className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts("servicios").map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isMobile={isMobile}
                onPurchase={handlePurchase}
                showSuccess={showSuccess === product.id}
                userPoints={userPoints} 
                userLevel={getCurrentUserLevel()}
              />
            ))}
          </div>
        </TabsContent>

        {/* Discounts Tab */}
        <TabsContent value="descuentos" className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts("descuentos").map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isMobile={isMobile}
                onPurchase={handlePurchase}
                showSuccess={showSuccess === product.id}
                userPoints={userPoints}
                userLevel={getCurrentUserLevel()}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Recent Purchases */}
      {purchases.length > 0 && (
        <div className="px-4 py-6">
          <h2 className="text-md font-semibold mb-3">Tus compras recientes</h2>
          <div className="bg-white rounded-xl overflow-hidden card-shadow">
            {purchases.slice(0, 3).map((purchase) => (
              <div key={purchase.id} className="flex justify-between items-center p-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-sm">{purchase.productName}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(purchase.date).toLocaleDateString('es-ES', { 
                      day: '2-digit', 
                      month: '2-digit', 
                      year: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className="flex items-center text-amber-600">
                  <Leaf size={14} className="mr-1" />
                  <span className="font-bold">{purchase.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Navigation />
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{
  product: Product, 
  isMobile: boolean,
  onPurchase: (product: Product) => void,
  showSuccess: boolean,
  userPoints: number,
  userLevel: number
}> = ({ product, isMobile, onPurchase, showSuccess, userPoints, userLevel }) => {
  const canPurchase = userPoints >= product.price && 
                      (!product.level || userLevel >= product.level);
  
  return (
    <Card className="overflow-hidden">
      <div className={`${isMobile ? 'h-28' : 'h-32'} bg-gray-200 relative`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {product.level && (
          <Badge className="absolute top-1 right-1 bg-amber-500 border-none">
            Nivel {product.level}+
          </Badge>
        )}
        {showSuccess && (
          <div className="absolute inset-0 bg-eco-primary/80 flex items-center justify-center">
            <div className="bg-white rounded-full p-1">
              <Check className="text-eco-primary" size={24} />
            </div>
          </div>
        )}
      </div>
      <CardContent className={`${isMobile ? 'p-2' : 'p-3'}`}>
        <h3 className="font-semibold text-sm truncate">{product.name}</h3>
        <p className={`text-xs text-gray-500 ${isMobile ? 'h-6' : 'h-8'} overflow-hidden`}>{product.description}</p>
      </CardContent>
      <CardFooter className={`flex justify-between items-center ${isMobile ? 'p-2 pt-0' : 'p-3 pt-0'}`}>
        <div className="flex items-center">
          <Leaf size={14} className="text-eco-primary mr-1" />
          <span className="font-bold text-sm">{product.price}</span>
        </div>
        <Button 
          size="sm" 
          className={`text-xs px-2 py-1 h-7 ${canPurchase ? '' : 'opacity-50'}`}
          onClick={() => onPurchase(product)}
          disabled={!canPurchase}
        >
          {userPoints < product.price ? "Insuficiente" : "Canjear"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EcoStore;
