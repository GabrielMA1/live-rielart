import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Globe, Target, TrendingUp, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.services-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.service-card',
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Logo design, color systems, and brand guidelines that make your business memorable and professional.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Systems'],
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Custom, responsive websites built on Webflow that look stunning and convert visitors into customers.',
      features: ['Webflow Development', 'Responsive Design', 'CMS Integration'],
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Strategic Facebook, Instagram, and LinkedIn ad campaigns that drive qualified leads to your business.',
      features: ['Facebook Ads', 'LinkedIn Ads', 'Retargeting'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Support',
      description: 'Ongoing optimization, A/B testing, and landing pages to continuously improve your results.',
      features: ['Landing Pages', 'A/B Testing', 'Analytics'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-flowing bg-[#0a0a0f] py-20 lg:py-28"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="services-header text-center mb-16">
          <span className="mono text-[#3b82f6] mb-4 block">OUR SERVICES</span>
          <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
            Everything You Need<br />to Grow Online
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            From brand identity to high-converting websites and paid ads—
            we handle the full journey so you can focus on your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card group relative"
            >
              <div className="card-dark p-8 lg:p-10 h-full hover-glow-blue">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center mb-6 group-hover:bg-[#3b82f6]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#3b82f6]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, fidx) => (
                    <span
                      key={fidx}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#1c1c24] border border-[#2a2a35] text-[#a0a0a0]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#06b6d4] transition-colors group/link"
                >
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
