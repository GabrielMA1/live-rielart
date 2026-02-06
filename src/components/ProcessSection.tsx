import { MessageSquare, Paintbrush, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Strategy Session',
    description: 'We start with a discovery call to understand your business, goals, audience, and current challenges. This helps us build the right foundation for your digital presence.',
    iconColor: 'primary',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Wireframes & Design',
    description: 'Next, we create wireframes and design mockups that reflect your brand identity and user experience strategy. This phase includes feedback rounds to make sure you love the direction before development begins.',
    iconColor: 'accent',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Webflow Development + Campaign Setup',
    description: 'Once the design is approved, we bring your site to life in Webflow and set up your ad campaign infrastructure—from pixel installs to landing pages. You walk away with a high-performing website and a ready-to-run funnel.',
    iconColor: 'primary',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Launch & Growth',
    description: 'We launch your site, connect your domain, install tracking, and hand over full control with a training session. Need help beyond launch? We offer SEO growth plans and ongoing support.',
    iconColor: 'accent',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            First impressions matter — so your website should perform and impress
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our simple, strategic 4-step process ensures you get a website that looks great, ranks well, and converts visitors into clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          
          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-7 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative pl-16 lg:pl-0 lg:text-center">
                {/* Step Number & Icon */}
                <div className="lg:mb-8 absolute lg:relative left-0 lg:left-auto top-0 lg:top-auto">
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center relative z-10 ${
                      step.iconColor === 'primary' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}
                    style={{ boxShadow: step.iconColor === 'primary' 
                      ? '0 4px 20px hsla(217, 91%, 60%, 0.4)' 
                      : '0 4px 20px hsla(24, 94%, 53%, 0.4)' 
                    }}
                  >
                    <step.icon size={24} />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                    {step.number.slice(1)}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:px-4">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
