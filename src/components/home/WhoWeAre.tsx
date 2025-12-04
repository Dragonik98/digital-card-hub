import { Shield, Zap, Users } from 'lucide-react';
export function WhoWeAre() {
  return <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6">Chi siamo</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Siamo un gruppo di collezionisti appassionati di Pokémon, uniti dalla frustrazione di vedere scomparire il vero spirito del “free to play”. All’inizio del 2025 abbiamo deciso di creare una community dedicata allo spacchettamento dei GP in italiano, con un obiettivo semplice ma prezioso: permettere a tutti di completare la propria collezione in modo completamente gratuito.
Per mesi ci siamo impegnati per far funzionare questo sistema per tutta la community, condividendo la passione per il collezionismo e riportando il divertimento al centro di tutto.</p>
            <p className="text-muted-foreground leading-relaxed">Purtroppo, dopo l'aggiornamento di Dena, l'amico deve essere presente prima dell’apertura dei GP, ci siamo trovati davanti a un ostacolo importante. Non ci siamo arresi: dopo settimane di lavoro e test, siamo riusciti a trovare una soluzione che ci permette di mantenere attivo il progetto.
Questa nuova gestione, però, comporta costi reali e continui, sia tecnici che organizzativi. Per questo oggi chiediamo un piccolo contributo: serve a coprire le spese, sostenere la manutenzione e permettere alla community di continuare a offrire un servizio funzionante, sicuro e accessibile a tutti.</p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card p-6 hover-glow">
                  <Shield className="h-10 w-10 text-primary mb-4 mx-[110px]" />
                  <h3 className="font-display font-semibold mb-2 text-center">Professionalità</h3>
                  <p className="text-sm text-muted-foreground text-center">Sicurezza di ricevere la carta per cui hai pagato.</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 hover-glow">
                  <Users className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display font-semibold mb-2 text-center">Community</h3>
                  <p className="text-sm text-muted-foreground text-center mx-0">Community unita e sempre pronta ad aiutare i nuovi entrati nel gruppo.</p>
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-xl border border-border bg-card p-6 hover-glow h-full flex flex-col justify-center">
                  <Zap className="h-10 w-10 text-primary mb-4 mx-[110px]" />
                  <h3 className="font-display font-semibold mb-2 text-center">Instant Delivery </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Get your digital cards immediately after purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}