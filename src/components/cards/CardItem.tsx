import { Heart, ShoppingCart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/types/store';
import { useStore } from '@/context/StoreContext';
import { cn } from '@/lib/utils';

interface CardItemProps {
  card: Card;
}

const rarityColors = {
  common: 'from-slate-400 to-slate-500',
  uncommon: 'from-green-400 to-emerald-500',
  rare: 'from-blue-400 to-cyan-500',
  epic: 'from-purple-400 to-violet-500',
  legendary: 'from-amber-400 to-orange-500',
};

const rarityGlow = {
  common: '',
  uncommon: 'hover:shadow-[0_0_20px_hsl(142_70%_45%/0.3)]',
  rare: 'hover:shadow-[0_0_25px_hsl(190_80%_50%/0.4)]',
  epic: 'hover:shadow-[0_0_30px_hsl(280_80%_60%/0.4)]',
  legendary: 'hover:shadow-[0_0_35px_hsl(35_90%_55%/0.5)]',
};

export function CardItem({ card }: CardItemProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(card.id);

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(card.id);
    } else {
      addToWishlist(card);
    }
  };

  return (
    <div
      className={cn(
        'group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 card-shine',
        rarityGlow[card.rarity]
      )}
    >
      {/* Rarity indicator */}
      <div className={cn(
        'absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r text-white',
        rarityColors[card.rarity]
      )}>
        <span className="flex items-center gap-1">
          {card.rarity === 'legendary' && <Sparkles className="h-3 w-3" />}
          {card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)}
        </span>
      </div>

      {/* Wishlist button */}
      <button
        onClick={handleWishlistClick}
        className="absolute top-3 right-3 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
      >
        <Heart
          className={cn(
            'h-4 w-4 transition-colors',
            inWishlist ? 'fill-destructive text-destructive' : 'text-foreground'
          )}
        />
      </button>

      {/* Card image */}
      <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-muted p-4">
        <div className="h-full w-full rounded-lg bg-card/50 flex items-center justify-center border border-border/50">
          <span className="font-display text-4xl gradient-text">{card.name.charAt(0)}</span>
        </div>
      </div>

      {/* Card info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {card.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{card.collection}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {card.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-xl font-bold text-primary">
            ${card.price.toFixed(2)}
          </span>

          {card.inStock ? (
            <Button
              size="sm"
              variant="default"
              onClick={() => addToCart(card)}
              className="gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Add
            </Button>
          ) : (
            <span className="text-sm text-muted-foreground">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}
