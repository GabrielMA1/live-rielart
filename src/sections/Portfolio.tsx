import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.portfolio-header',
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

      gsap.fromTo('.portfolio-card',
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Lumina Studio',
      category: 'Web Design & Branding',
      description: 'A modern wellness brand with a calming visual identity and high-converting booking website.',
      stats: { metric: '3.2x', label: 'Conversion Increase' },
      gradient: 'from-[#3b82f6] to-[#8b5cf6]',
    },
    {
      title: 'TechFlow',
      category: 'SaaS Website',
      description: 'B2B software company website with interactive demos and streamlined lead generation.',
      stats: { metric: '150%', label: 'Lead Growth' },
      gradient: 'from-[#06b6d4] to-[#3b82f6]',
    },
    {
      title: 'Artisan Coffee',
      category: 'E-commerce & Branding',
      description: 'Premium coffee brand with full e-commerce setup and subscription functionality.',
      stats: { metric: '2.8x', label: 'Revenue Growth' },
      gradient: 'from-[#f59e0b] to-[#ef4444]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section-flowing bg-[#121218] py-20 lg:py-28"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="portfolio-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="mono text-[#3b82f6] mb-4 block">SELECTED WORK</span>
            <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0]">
              Projects That<br />Performed
            </h2>
          </div>
          <p className="text-[#a0a0a0] max-w-md">
            See how we&apos;ve helped businesses like yours achieve measurable growth through design and strategy.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid grid gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="portfolio-card"
            >
              <div className="card-dark overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className={`relative h-64 md:h-80 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-[#0a0a0f]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-4xl font-['Space_Grotesk'] font-bold text-white/80">
                          {project.title[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="mono text-[#3b82f6] mb-3">{project.category}</span>
                    <h3 className="text-2xl lg:text-3xl font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-['Space_Grotesk'] font-bold text-[#3b82f6]">
                        {project.stats.metric}
                      </div>
                      <div className="text-sm text-[#a0a0a0]">{project.stats.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
