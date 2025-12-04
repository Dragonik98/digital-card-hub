import { Heart, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useStore } from '@/context/StoreContext';
import { useState } from 'react';
import { collections } from '@/data/mockData';

export function Header() {
  const { cartItemCount, wishlist } = useStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const seriesACollections = collections.filter(c => c.series === 'A');
  const seriesBCollections = collections.filter(c => c.series === 'B');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      {/* Top bar */}
      <div className="border-b border-border/30">
        <div className="container flex h-12 items-center justify-end gap-4">
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link to="/auth">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login / Register</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-2 relative" asChild>
            <Link to="/wishlist">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Wishlist</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-xs flex items-center justify-center text-accent-foreground font-medium">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-2 relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground font-medium">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display text-xl font-bold text-primary-foreground">DC</span>
            </div>
            <span className="font-display text-xl font-bold gradient-text hidden sm:block">
              Digital Cards
            </span>
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center gap-1">
            <Link to="/">
              <Button variant="ghost" className="font-medium">Home</Button>
            </Link>
            
            {/* Series A Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('seriesA')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Button variant="ghost" className="font-medium gap-1">
                Series A
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === 'seriesA' ? 'rotate-180' : ''}`} />
              </Button>
              
              {activeMenu === 'seriesA' && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="w-64 rounded-lg border border-border bg-popover p-2 shadow-xl">
                    {seriesACollections.map(collection => (
                      <Link
                        key={collection.id}
                        to={`/collection/${collection.id}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-secondary transition-colors"
                      >
                        <div className="h-10 w-10 rounded bg-secondary flex items-center justify-center">
                          <span className="text-xs font-medium text-primary">{collection.cardCount}</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{collection.name}</p>
                          <p className="text-xs text-muted-foreground">{collection.cardCount} cards</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Series B Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('seriesB')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Button variant="ghost" className="font-medium gap-1">
                Series B
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === 'seriesB' ? 'rotate-180' : ''}`} />
              </Button>
              
              {activeMenu === 'seriesB' && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="w-64 rounded-lg border border-border bg-popover p-2 shadow-xl">
                    {seriesBCollections.map(collection => (
                      <Link
                        key={collection.id}
                        to={`/collection/${collection.id}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-secondary transition-colors"
                      >
                        <div className="h-10 w-10 rounded bg-secondary flex items-center justify-center">
                          <span className="text-xs font-medium text-accent">{collection.cardCount}</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{collection.name}</p>
                          <p className="text-xs text-muted-foreground">{collection.cardCount} cards</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
