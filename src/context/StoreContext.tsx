import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Card, CartItem } from '@/types/store';

interface StoreContextType {
  cart: CartItem[];
  wishlist: Card[];
  addToCart: (card: Card) => void;
  removeFromCart: (cardId: string) => void;
  updateQuantity: (cardId: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (card: Card) => void;
  removeFromWishlist: (cardId: string) => void;
  isInWishlist: (cardId: string) => boolean;
  cartItemCount: number;
  cartTotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Card[]>([]);

  const addToCart = (card: Card) => {
    setCart(prev => {
      const existing = prev.find(item => item.card.id === card.id);
      if (existing) {
        return prev.map(item =>
          item.card.id === card.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { card, quantity: 1 }];
    });
  };

  const removeFromCart = (cardId: string) => {
    setCart(prev => prev.filter(item => item.card.id !== cardId));
  };

  const updateQuantity = (cardId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cardId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.card.id === cardId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const addToWishlist = (card: Card) => {
    setWishlist(prev => {
      if (prev.find(c => c.id === card.id)) return prev;
      return [...prev, card];
    });
  };

  const removeFromWishlist = (cardId: string) => {
    setWishlist(prev => prev.filter(c => c.id !== cardId));
  };

  const isInWishlist = (cardId: string) => wishlist.some(c => c.id === cardId);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.card.price * item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        cartItemCount,
        cartTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
