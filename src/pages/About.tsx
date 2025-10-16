import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Shield, Truck, HeadphonesIcon, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trusted Quality',
      description: 'We carefully curate products from verified suppliers to ensure the highest quality standards.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your products to you as soon as possible.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is always here to help with any questions.',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive pricing and regular deals to give you the best value for your money.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-clothing via-phones to-cosmetics text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About ShopHub</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted destination for quality products across multiple categories
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded with a passion for bringing quality products to customers worldwide, ShopHub has
                grown to become a trusted name in online retail. We specialize in four key categories:
                fashion-forward clothing, cutting-edge technology, premium cosmetics, and gourmet food items.
              </p>
              <p>
                Our mission is simple: to provide our customers with an exceptional shopping experience,
                featuring carefully selected products, competitive prices, and outstanding customer service.
                Every item in our catalog is chosen with care to meet our high standards of quality and value.
              </p>
              <p>
                We believe in building lasting relationships with our customers through trust, transparency,
                and dedication to excellence. Whether you're looking for the latest fashion trends, must-have
                tech gadgets, beauty essentials, or artisan foods, we're here to make your shopping journey
                enjoyable and rewarding.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="p-6 text-center hover:shadow-soft-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At ShopHub, we're committed to sustainability, ethical sourcing, and creating a positive
              impact on the communities we serve. We work closely with our suppliers to ensure fair
              practices and environmental responsibility throughout our supply chain.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Thank you for choosing ShopHub. We're excited to be part of your shopping journey and
              look forward to serving you with excellence every step of the way.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
