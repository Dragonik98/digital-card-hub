import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collection } from '@/types/store';
import { cn } from '@/lib/utils';

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      to={`/collection/${collection.id}`}
      className="group relative block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
    >
      {/* Series badge */}
      <div className={cn(
        'absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-semibold',
        collection.series === 'A' 
          ? 'bg-primary/20 text-primary border border-primary/30' 
          : 'bg-accent/20 text-accent border border-accent/30'
      )}>
        Series {collection.series}
      </div>

      {/* Collection image */}
      <div className="aspect-video bg-gradient-to-br from-secondary via-muted to-secondary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl gradient-text opacity-30 group-hover:opacity-50 transition-opacity">
            {collection.name.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Collection info */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {collection.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {collection.description}
            </p>
          </div>
          <div className="rounded-full bg-secondary p-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {collection.cardCount} cards
          </span>
          <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Browse Collection
          </span>
        </div>
      </div>
    </Link>
  );
}
