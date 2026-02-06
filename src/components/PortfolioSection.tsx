import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at some of the projects we've brought to life for our clients.
          </p>
        </div>

        {/* Featured Project */}
        <div className="card-hover bg-card rounded-3xl overflow-hidden border border-border">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 sm:h-80 lg:h-auto bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-primary-foreground">FF</span>
                  </div>
                  <span className="font-display font-bold text-3xl text-foreground">FitForward</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-20 h-20 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-accent/20 rounded-full" />
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Brand identity', 'UI&UX', 'Graphic design', 'Web development'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Personal Trainer Branding & Web Presence
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We crafted a bold, modern website for FitForward to promote their coaching services. 
                With branded visuals, localized SEO, and a mobile-first layout, they saw a{' '}
                <span className="text-accent font-semibold">2x increase in booking inquiries</span>.
              </p>

              {/* CTA */}
              <a
                href="https://rielart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold w-fit"
              >
                View Website
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* More Projects Coming */}
        <p className="text-center text-muted-foreground mt-12">
          More case studies coming soon. <a href="#contact" className="text-primary hover:underline font-medium">Get in touch</a> to discuss your project.
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
