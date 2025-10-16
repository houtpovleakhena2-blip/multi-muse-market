import { Link } from 'react-router-dom';
import { ArrowRight, Shirt, Smartphone, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';
import heroBanner from '@/assets/hero-banner.jpg';

const categories = [
  {
    name: 'Clothing',
    icon: Shirt,
    path: '/category/clothing',
    color: 'bg-clothing-light border-clothing',
    textColor: 'text-clothing',
  },
  {
    name: 'Phones',
    icon: Smartphone,
    path: '/category/phones',
    color: 'bg-phones-light border-phones',
    textColor: 'text-phones',
  },
  {
    name: 'Cosmetics',
    icon: Sparkles,
    path: '/category/cosmetics',
    color: 'bg-cosmetics-light border-cosmetics',
    textColor: 'text-cosmetics',
  },
  {
    name: 'Food',
    icon: UtensilsCrossed,
    path: '/category/food',
    color: 'bg-food-light border-food',
    textColor: 'text-food',
  },
];

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Shopping hero banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome to ShopHub
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover amazing products across clothing, tech, beauty, and gourmet food.
            </p>
            <Button size="lg" className="group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.path}
                to={category.path}
                className={`${category.color} border-2 rounded-xl p-6 text-center hover:shadow-soft-lg transition-all duration-300 hover:scale-105 group`}
              >
                <Icon className={`h-12 w-12 mx-auto mb-3 ${category.textColor}`} />
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-muted-foreground">Check out our hand-picked selection of trending items</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-clothing via-phones to-cosmetics rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Special Offers This Week!</h2>
          <p className="text-xl mb-6 text-white/90">
            Save up to 30% on selected items across all categories
          </p>
          <Button size="lg" variant="secondary">
            View All Deals
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
