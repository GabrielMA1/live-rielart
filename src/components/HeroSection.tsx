import { Star, Briefcase, Award, Code, Zap, TrendingUp, Palette, Radio } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 hero-pattern relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Zap size={16} />
              Digital Creative Studio
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
                href="#contact"
                className="btn-accent px-8 py-4 rounded-lg font-semibold text-base w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Project
              </a>
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

          {/* Right - Visual Composition */}
          <div className="animate-fade-up stagger-2 relative hidden lg:block">
            <div className="relative h-[520px]">
              
              {/* Browser Window Mockup */}
              <div className="absolute top-8 left-8 right-8 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background rounded-lg px-4 py-1.5 text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-primary/20" />
                      <span>yourwebsite.com</span>
                    </div>
                  </div>
                </div>
                {/* Browser Content */}
                <div className="p-6 bg-gradient-to-br from-primary/5 via-background to-accent/5 h-64">
                  <div className="space-y-4">
                    <div className="h-8 bg-primary/20 rounded-lg w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                    <div className="flex gap-3 mt-6">
                      <div className="h-10 bg-primary rounded-lg w-28" />
                      <div className="h-10 border-2 border-primary/30 rounded-lg w-28" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Analytics Card */}
              <div className="absolute -right-4 top-16 bg-card rounded-xl shadow-xl border border-border p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Conversion Rate</p>
                    <p className="font-display font-bold text-foreground flex items-center gap-1">
                      +147%
                      <span className="text-xs text-green-500">↑</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Brand Identity Card */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-card rounded-xl shadow-xl border border-border p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Brand Identity</p>
                    <p className="font-display font-bold text-foreground">Complete</p>
                  </div>
                </div>
              </div>

              {/* Floating Ads Live Card */}
              <div className="absolute right-8 bottom-4 bg-card rounded-xl shadow-xl border border-border p-4 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center relative">
                    <Radio className="w-5 h-5 text-accent" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ad Campaigns</p>
                    <p className="font-display font-bold text-accent">Live</p>
                  </div>
                </div>
              </div>

              {/* Decorative Icons */}
              <div className="absolute top-4 right-1/4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center rotate-12 animate-float-delayed">
                <Code className="w-6 h-6 text-primary" />
              </div>
              
              <div className="absolute bottom-16 left-4 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center -rotate-12 animate-float">
                <Zap className="w-5 h-5 text-accent" />
              </div>

              {/* Decorative circles */}
              <div className="absolute top-1/3 -right-2 w-8 h-8 border-2 border-primary/30 rounded-full" />
              <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-accent/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
