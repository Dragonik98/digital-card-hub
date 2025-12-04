import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useStore } from '@/context/StoreContext';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumb />
        <main className="container py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="rounded-full bg-secondary w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any cards to your cart yet.
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
        <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(({ card, quantity }) => (
              <div
                key={card.id}
                className="flex gap-4 rounded-xl border border-border bg-card p-4"
              >
                {/* Card preview */}
                <div className="w-24 h-32 rounded-lg bg-gradient-to-br from-secondary to-muted flex items-center justify-center shrink-0">
                  <span className="font-display text-2xl gradient-text">{card.name.charAt(0)}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold">{card.name}</h3>
                  <p className="text-sm text-muted-foreground">{card.collection}</p>
                  <p className="text-lg font-bold text-primary mt-2">
                    ${card.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity controls */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(card.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(card.id, quantity - 1)}
                      className="rounded-md bg-secondary p-1 hover:bg-secondary/80 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(card.id, quantity + 1)}
                      className="rounded-md bg-secondary p-1 hover:bg-secondary/80 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-6 sticky top-32">
              <h2 className="font-display text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Processing Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between font-display font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button variant="hero" className="w-full" size="lg">
                Proceed to Checkout
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure checkout powered by industry-leading encryption
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
