import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      // Load animation
      const loadTl = gsap.timeline({ delay: 0.2 });
      
      loadTl
        .fromTo('.hero-badge',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        )
        .fromTo('.hero-title span',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo('.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo('.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo('.hero-trust',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set('.hero-badge, .hero-title span, .hero-subtitle, .hero-ctas, .hero-trust', {
              opacity: 1, y: 0
            });
          }
        }
      });

      // EXIT phase
      scrollTl
        .fromTo(content,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const trustBadges = [
    { icon: Award, label: 'Webflow Certified' },
    { icon: Users, label: '50+ Projects' },
    { icon: Zap, label: '2-Week Delivery' },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pinned z-10 mesh-gradient"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        {/* Badge */}
        <div className="hero-badge trust-badge mb-8">
          <Award className="w-4 h-4 text-[#3b82f6]" />
          <span className="text-sm text-[#f0f0f0]">Webflow Certified Partner</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title text-hero font-['Space_Grotesk'] font-bold text-[#f0f0f0] text-center max-w-5xl mb-6">
          <span className="block">Websites That</span>
          <span className="block mt-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
            Convert Visitors
          </span>
          <span className="block mt-2">Into Clients</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-[#a0a0a0] text-center max-w-2xl mb-10">
          Custom Webflow sites, branding, and paid ad campaigns for startups 
          and small businesses ready to grow.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="btn-primary"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#portfolio"
            className="btn-outline"
          >
            View Our Work
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-trust flex flex-wrap justify-center gap-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1c24] border border-[#2a2a35]"
            >
              <badge.icon className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-sm text-[#a0a0a0]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
};

export default Hero;
