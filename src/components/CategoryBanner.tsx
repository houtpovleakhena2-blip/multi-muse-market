import { ReactNode } from 'react';
import { Category } from '@/types';

interface CategoryBannerProps {
  category: Category;
  title: string;
  description: string;
  icon: ReactNode;
}

export const CategoryBanner = ({ category, title, description, icon }: CategoryBannerProps) => {
  const getBgColor = () => {
    const colors = {
      clothing: 'bg-clothing-light',
      phones: 'bg-phones-light',
      cosmetics: 'bg-cosmetics-light',
      food: 'bg-food-light',
    };
    return colors[category];
  };

  const getAccentColor = () => {
    const colors = {
      clothing: 'text-clothing',
      phones: 'text-phones',
      cosmetics: 'text-cosmetics',
      food: 'text-food',
    };
    return colors[category];
  };

  return (
    <div className={`${getBgColor()} rounded-xl p-8 mb-8 animate-fade-in`}>
      <div className="flex items-center gap-4">
        <div className={`${getAccentColor()} opacity-80`}>
          {icon}
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
