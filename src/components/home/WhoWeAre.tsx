import { Shield, Zap, Users } from 'lucide-react';

export function WhoWeAre() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are passionate collectors and creators who believe in the power of digital art 
              and collectibles. Our mission is to bring you the most exclusive, beautifully 
              designed digital cards that you'll treasure in your collection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded by enthusiasts for enthusiasts, we curate each collection with care, 
              ensuring every card tells a story and holds value. Join our growing community 
              of collectors who share the same passion for rare and unique digital treasures.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card p-6 hover-glow">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display font-semibold mb-2">Authentic</h3>
                  <p className="text-sm text-muted-foreground">
                    Every card is verified and authenticated
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 hover-glow">
                  <Users className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Join thousands of passionate collectors
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-xl border border-border bg-card p-6 hover-glow h-full flex flex-col justify-center">
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display font-semibold mb-2">Instant Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your digital cards immediately after purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
