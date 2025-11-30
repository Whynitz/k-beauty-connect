import { ClinicCard } from "@/components/ClinicCard";
import { clinics } from "@/data/clinics";
import { Sparkles, MapPin, Shield } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-cream" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Premium K-Beauty Experience</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Your Journey to
              <br />
              <span className="text-primary">Radiant Beauty</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto font-body">
              Book appointments at Korea's finest beauty clinics. 
              Real-time availability, seamless reservations.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-y border-border/50">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-1">Seoul's Best</h3>
              <p className="text-sm text-muted-foreground">Curated premium clinics</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-1">Real-Time</h3>
              <p className="text-sm text-muted-foreground">Live availability</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-1">Secure</h3>
              <p className="text-sm text-muted-foreground">Safe data handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl text-foreground mb-2">Featured Clinics</h2>
              <p className="text-muted-foreground">Handpicked for exceptional quality and service</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinics.map((clinic, index) => (
              <ClinicCard key={clinic.id} clinic={clinic} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 gradient-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Trusted by International Visitors
            </h2>
            <p className="text-muted-foreground mb-8">
              We partner with certified medical aesthetic clinics that specialize in 
              serving international patients with English-speaking staff.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>🇺🇸 USA</span>
              <span>🇬🇧 UK</span>
              <span>🇯🇵 Japan</span>
              <span>🇸🇬 Singapore</span>
              <span>🇦🇺 Australia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className="font-display text-lg">
              K-Beauty <span className="text-primary">Abroad</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
