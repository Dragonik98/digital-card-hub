import { CardItem } from '@/components/cards/CardItem';
import { featuredCards } from '@/data/mockData';

export function FeaturedCards() {
  return (
    <section id="featured" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Hot Picks</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Featured Cards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most sought-after digital cards, handpicked for collectors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCards.map((card, index) => (
            <div
              key={card.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardItem card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
