import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CardItem } from '@/components/cards/CardItem';
import { useStore } from '@/context/StoreContext';

export default function Wishlist() {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumb />
        <main className="container py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="rounded-full bg-secondary w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Start adding cards you love to your wishlist!
            </p>
            <Button variant="hero" asChild>
              <Link to="/">Browse Cards</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="container py-12">
        <h1 className="font-display text-3xl font-bold mb-8">My Wishlist</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
