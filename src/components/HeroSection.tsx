import { Star, Briefcase, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 hero-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Award size={16} />
            Webflow Certified Partner
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up stagger-1 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            Helping businesses grow through{' '}
            <span className="text-primary">impactful ads</span>,{' '}
            <span className="text-accent">stunning websites</span>, and{' '}
            strategic brand identity
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up stagger-2 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            RielArt Studio empowers startups and small businesses with custom Webflow websites, 
            paid ad campaigns that convert, and branding that builds recognition and trust.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#work"
              className="btn-outline px-8 py-4 rounded-lg font-semibold text-base w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="btn-accent px-8 py-4 rounded-lg font-semibold text-base w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Project
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up stagger-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="trust-badge">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-medium text-foreground">5-Star Rated</span>
            </div>
            <div className="trust-badge">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">50+ Projects</span>
            </div>
            <div className="trust-badge">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Webflow Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
