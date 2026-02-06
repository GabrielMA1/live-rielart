import { Star, Briefcase, Award } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 hero-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Award size={16} />
              Webflow Certified Partner
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-up stagger-1 font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Helping businesses grow through{' '}
              <span className="text-primary">impactful ads</span>,{' '}
              <span className="text-accent">stunning websites</span>, and{' '}
              strategic brand identity
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up stagger-2 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              RielArt Studio empowers startups and small businesses with custom Webflow websites, 
              paid ad campaigns that convert, and branding that builds recognition and trust.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10">
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
            <div className="animate-fade-up stagger-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
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

          {/* Right - Image */}
          <div className="animate-fade-up stagger-2 relative hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Digital creative studio abstract visualization" 
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10" />
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl rotate-12 opacity-80 shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-xl -rotate-12 opacity-80 shadow-lg" />
              <div className="absolute top-1/2 -right-8 w-12 h-12 border-4 border-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
