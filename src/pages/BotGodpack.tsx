import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Footer } from '@/components/layout/Footer';
import { Bot, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function BotGodpack() {
  return <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
            <Bot className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Bot <span className="gradient-text">Godpack</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Il nostro bot ti permette di ottenere dei GP nella tua pesca misteriosa!

Il funzionamento è molto semplice: tramite il token ID gestiamo automaticamente le richieste di amicizia sul tuo account, aggiungendo e rimuovendo gli amici in modo sicuro.

Se uno degli amici aggiunti trova un GP, il bot lo rileva immediatamente e non lo elimina dalla lista, così da garantire la possibilità che ti appaia nella tua pesca misteriosa.</p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Apre più di 300 pacchetti al minuto</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Secure & Safe</h3>
            <p className="text-sm text-muted-foreground">
              Your account and cards are protected with our secure protocols.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">24/7 Operation</h3>
            <p className="text-sm text-muted-foreground">
              The bot runs around the clock to maximize your card collection.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary via-background to-secondary p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us to learn more about our Bot Godpack service and pricing options.
          </p>
          <Button size="lg" className="font-medium">
            Contact Us
          </Button>
        </div>
      </main>
      <Footer />
    </div>;
}