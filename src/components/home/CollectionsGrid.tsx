import { CollectionCard } from '@/components/cards/CollectionCard';
import { collections } from '@/data/mockData';

export function CollectionsGrid() {
  return (
    <section id="collections" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Explore</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Our Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our carefully curated series of digital card collections
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
