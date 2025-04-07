
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Leaf, Star, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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

const EcoStore: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Bolsa Ecológica",
      description: "Bolsa reutilizable hecha de plástico reciclado",
      price: 50,
      image: "/placeholder.svg",
      category: "productos",
      popular: true
    },
    {
      id: 2,
      name: "Botella Reutilizable",
      description: "Botella de acero inoxidable, reduce tu uso de plástico",
      price: 120,
      image: "/placeholder.svg",
      category: "productos",
      level: 2
    },
    {
      id: 3,
      name: "Descuento SuperEco",
      description: "15% de descuento en tiendas afiliadas",
      price: 75,
      image: "/placeholder.svg",
      category: "descuentos",
      popular: true
    },
    {
      id: 4,
      name: "Entrada Museo Ecológico",
      description: "Entrada gratuita al museo ecológico de la ciudad",
      price: 100,
      image: "/placeholder.svg",
      category: "servicios"
    },
    {
      id: 5,
      name: "Planta un Árbol",
      description: "Contribuye a plantar un árbol en zonas reforestadas",
      price: 150,
      image: "/placeholder.svg",
      category: "servicios",
      level: 3
    },
    {
      id: 6,
      name: "Descuento EcoRestaurante",
      description: "10% de descuento en restaurantes eco-friendly",
      price: 65,
      image: "/placeholder.svg",
      category: "descuentos"
    }
  ];

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
              <ProductCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="productos" className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts("productos").map(product => (
              <ProductCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="servicios" className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts("servicios").map(product => (
              <ProductCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </TabsContent>

        {/* Discounts Tab */}
        <TabsContent value="descuentos" className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts("descuentos").map(product => (
              <ProductCard key={product.id} product={product} isMobile={isMobile} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Navigation />
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{product: Product, isMobile: boolean}> = ({ product, isMobile }) => {
  return (
    <Card className="overflow-hidden">
      <div className={`${isMobile ? 'h-28' : 'h-32'} bg-gray-200 relative`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {product.level && (
          <div className="absolute top-1 right-1 bg-amber-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            Nivel {product.level}+
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
        <Button size="sm" className="text-xs px-2 py-1 h-7">
          Canjear
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EcoStore;
