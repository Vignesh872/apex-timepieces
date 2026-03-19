import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategoryShowcase } from '@/components/CategoryShowcase';
import { FeaturedCollection } from '@/components/FeaturedCollection';
import { BrandShowcase } from '@/components/BrandShowcase';
import { CraftsmanshipBanner } from '@/components/CraftsmanshipBanner';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen gradient-premium">
      <Navbar />
      <Hero />
      <CategoryShowcase />
      <FeaturedCollection />
      <BrandShowcase />
      <CraftsmanshipBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
