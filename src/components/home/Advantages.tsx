import { CreditCard, Download, Lock, Headphones, RefreshCw, Award } from 'lucide-react';
const advantages = [{
  icon: Lock,
  title: 'Secure Transactions',
  description: 'Your payments are protected with industry-leading encryption technology.'
}, {
  icon: Download,
  title: 'Instant Downloads',
  description: 'Get your digital cards immediately after completing your purchase.'
}, {
  icon: CreditCard,
  title: 'Multiple Payment Options',
  description: 'Pay with credit card, PayPal, crypto, or other popular methods.'
}, {
  icon: Headphones,
  title: '24/7 Support',
  description: 'Our dedicated team is always here to help with any questions.'
}, {
  icon: RefreshCw,
  title: 'Regular Updates',
  description: 'New collections and cards added regularly to keep your collection fresh.'
}, {
  icon: Award,
  title: 'Exclusive Access',
  description: 'Members get early access to limited edition releases and special offers.'
}];
export function Advantages() {
  return <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Benefits</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-4">Perchè scegliere noi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Siamo una community inclusiva che ha sempre qualcuno online per risolvere dubbi e domande</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => <div key={advantage.title} className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {advantage.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}