import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Footer } from '@/components/layout/Footer';
import { CardItem } from '@/components/cards/CardItem';
import { collections, featuredCards } from '@/data/mockData';
import { Button } from '@/components/ui/button';

export default function Collection() {
  const { id } = useParams();
  const collection = collections.find((c) => c.id === id);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumb />
        <main className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Collection not found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  // Filter cards by collection
  const collectionCards = featuredCards.filter(
    (card) => card.collection === collection.name
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="container py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Collections
        </Link>

        {/* Collection Header */}
        <div className="rounded-xl border border-border bg-card overflow-hidden mb-12">
          <div className="aspect-[3/1] bg-gradient-to-br from-secondary via-muted to-secondary relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[10rem] gradient-text opacity-20">
                {collection.name.charAt(0)}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-sm text-primary mb-4">
                Series {collection.series}
              </div>
              <h1 className="font-display text-4xl font-bold mb-2">{collection.name}</h1>
              <p className="text-muted-foreground max-w-2xl">{collection.description}</p>
              <p className="text-sm text-muted-foreground mt-4">
                {collection.cardCount} cards in this collection
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {collectionCards.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collectionCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              No cards available in this collection yet.
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for new additions!
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
