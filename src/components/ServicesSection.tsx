import { Palette, Code, Target, Check } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Build a brand that connects, communicates, and converts',
    features: [
      'Logo and visual identity design',
      'Brand strategy and positioning',
      'Typography and color system',
      'Brand guidelines and asset kit',
      'Social media and print collateral',
    ],
  },
  {
    icon: Code,
    title: 'Webflow Development',
    description: 'We design and develop sleek, responsive websites on Webflow that convert',
    features: [
      'Custom Webflow design & development',
      'CMS & e-commerce implementation',
      'SEO and performance optimization',
      'Fully responsive across devices',
      'Ongoing support and updates',
    ],
  },
  {
    icon: Target,
    title: 'Marketing & Ads Management',
    description: 'We help you attract the right customers with targeted digital advertising',
    features: [
      'Paid ads strategy & campaign planning',
      'Google, Meta & TikTok ad setup',
      'Copywriting and creative direction',
      'Targeting & audience research',
      'A/B testing and performance optimization',
      'Monthly ad reports and insights',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything you need to grow online
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From brand identity to web development and paid advertising, we provide end-to-end solutions for your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card card-hover bg-card rounded-2xl p-8 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`icon-circle mb-6 ${index === 1 ? 'icon-circle-accent' : 'icon-circle-primary'}`}>
                <service.icon size={28} />
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
