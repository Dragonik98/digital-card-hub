import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { WhoWeAre } from '@/components/home/WhoWeAre';
import { Advantages } from '@/components/home/Advantages';
import { FeaturedCards } from '@/components/home/FeaturedCards';
import { CollectionsGrid } from '@/components/home/CollectionsGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main>
        <HeroSection />
        <WhoWeAre />
        <FeaturedCards />
        <Advantages />
        <CollectionsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
