import { useParams } from 'react-router-dom';
import { Shirt, Smartphone, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { CategoryBanner } from '@/components/CategoryBanner';
import { products } from '@/data/products';
import { Category } from '@/types';

const categoryInfo = {
  clothing: {
    title: 'Clothing',
    description: 'Discover the latest fashion trends and timeless classics',
    icon: <Shirt className="h-12 w-12" />,
  },
  phones: {
    title: 'Phones',
    description: 'Explore cutting-edge smartphones and mobile technology',
    icon: <Smartphone className="h-12 w-12" />,
  },
  cosmetics: {
    title: 'Cosmetics',
    description: 'Premium beauty products for your skincare and makeup needs',
    icon: <Sparkles className="h-12 w-12" />,
  },
  food: {
    title: 'Food',
    description: 'Gourmet foods and artisan ingredients for every taste',
    icon: <UtensilsCrossed className="h-12 w-12" />,
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: Category }>();
  
  if (!category || !categoryInfo[category]) {
    return <div>Category not found</div>;
  }

  const categoryProducts = products.filter((p) => p.category === category);
  const info = categoryInfo[category];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <CategoryBanner
          category={category}
          title={info.title}
          description={info.description}
          icon={info.icon}
        />

        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {categoryProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
