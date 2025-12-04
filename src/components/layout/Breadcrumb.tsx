import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { collections } from '@/data/mockData';

export function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbItems = () => {
    const items = [{ label: 'Home', href: '/' }];

    if (pathSegments.length === 0) return items;

    if (pathSegments[0] === 'collection' && pathSegments[1]) {
      const collection = collections.find(c => c.id === pathSegments[1]);
      if (collection) {
        items.push({
          label: `Series ${collection.series}`,
          href: `/?series=${collection.series}`,
        });
        items.push({
          label: collection.name,
          href: `/collection/${collection.id}`,
        });
      }
    } else if (pathSegments[0] === 'cart') {
      items.push({ label: 'Cart', href: '/cart' });
    } else if (pathSegments[0] === 'wishlist') {
      items.push({ label: 'Wishlist', href: '/wishlist' });
    } else if (pathSegments[0] === 'auth') {
      items.push({ label: 'Login / Register', href: '/auth' });
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <div className="border-b border-border/30 bg-secondary/30">
      <div className="container py-3">
        <nav className="flex items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <div key={item.href} className="flex items-center gap-2">
              {index === 0 && <Home className="h-4 w-4 text-muted-foreground" />}
              {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
