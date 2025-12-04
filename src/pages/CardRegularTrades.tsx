import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeftRight, Users, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CardRegularTrades() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary mb-6">
            <ArrowLeftRight className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Card <span className="gradient-text">Regular Trades</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trade your duplicate cards with other collectors. Build your perfect collection through our trusted trading platform.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                1
              </div>
              <h3 className="font-medium mb-2">List Your Cards</h3>
              <p className="text-sm text-muted-foreground">Add the cards you want to trade to your trade list.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                2
              </div>
              <h3 className="font-medium mb-2">Find Matches</h3>
              <p className="text-sm text-muted-foreground">Browse other traders' lists and find what you need.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                3
              </div>
              <h3 className="font-medium mb-2">Propose Trade</h3>
              <p className="text-sm text-muted-foreground">Send a trade offer and negotiate terms.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                4
              </div>
              <h3 className="font-medium mb-2">Complete Trade</h3>
              <p className="text-sm text-muted-foreground">Safely exchange cards through our platform.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="font-display text-3xl font-bold mb-1">5,000+</p>
            <p className="text-sm text-muted-foreground">Active Traders</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <ArrowLeftRight className="h-8 w-8 text-accent mx-auto mb-3" />
            <p className="font-display text-3xl font-bold mb-1">50,000+</p>
            <p className="text-sm text-muted-foreground">Successful Trades</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="font-display text-3xl font-bold mb-1">4.9/5</p>
            <p className="text-sm text-muted-foreground">User Rating</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary via-background to-secondary p-8 md:p-12 text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Start Trading Today
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join our community of card traders and find the perfect cards for your collection.
          </p>
          <Button size="lg" className="font-medium">
            Join Trading Community
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
