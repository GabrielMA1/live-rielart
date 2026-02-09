import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Star, Briefcase } from 'lucide-react';

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
        )
        .fromTo('.hero-dashboard',
          { opacity: 0, x: 100, rotateY: -20 },
          { opacity: 1, x: 0, rotateY: -8, duration: 1, ease: 'power2.out' },
          '-=0.8'
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
            gsap.set('.hero-badge, .hero-title span, .hero-subtitle, .hero-ctas, .hero-trust, .hero-dashboard', {
              opacity: 1, y: 0, x: 0
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
        )
        .fromTo('.hero-dashboard',
          { opacity: 1, x: 0 },
          { opacity: 0, x: 50, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const trustBadges = [
    { icon: Star, label: '5-Star Rated' },
    { icon: Briefcase, label: '50+ Projects' },
    { icon: Award, label: 'Webflow Certified' },
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

      {/* Content - Split Layout */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center px-6 lg:px-12 xl:px-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6 lg:pr-8">
            {/* Badge */}
            <div className="hero-badge trust-badge w-fit">
              <Award className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-sm text-[#f0f0f0]">Webflow Certified Partner</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold text-[#f0f0f0] leading-[1.1] tracking-tight">
              <span className="block">Helping businesses</span>
              <span className="block mt-2">grow through</span>
              <span className="block mt-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                impactful ads
              </span>
              <span className="block mt-2">and stunning sites</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-lg md:text-xl text-[#a0a0a0] max-w-xl">
              We empower startups and small businesses with custom Webflow sites, 
              paid campaigns that convert, and branding that builds trust.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="btn-outline">
                View Our Work
              </a>
            </div>

            {/* Trust badges */}
            <div className="hero-trust flex flex-wrap gap-3 pt-2">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1c24] border border-[#2a2a35]">
                  <badge.icon className="w-4 h-4 text-[#3b82f6]" />
                  <span className="text-sm text-[#a0a0a0]">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Dashboard */}
          <div className="hero-dashboard relative flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="relative" style={{ transform: 'perspective(1000px) rotateY(-8deg) rotateX(5deg)' }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/30 to-[#06b6d4]/20 rounded-3xl blur-3xl scale-110 animate-pulse" />
              
              {/* Main dashboard */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1c1c24]" style={{ boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.2)' }}>
                <img src="/hero-dashboard.jpg" alt="Analytics Dashboard" className="w-full max-w-lg xl:max-w-xl h-auto" loading="eager" />
                
                {/* Floating metric cards */}
                <div className="absolute -left-4 top-1/4 bg-[#1c1c24]/90 backdrop-blur-sm border border-[#3b82f6]/20 rounded-xl p-3 animate-[float_6s_ease-in-out_infinite]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#a0a0a0]">Growth</p>
                      <p className="text-sm font-bold text-emerald-400">+127%</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-[#1c1c24]/90 backdrop-blur-sm border border-[#3b82f6]/20 rounded-xl p-3 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#a0a0a0]">Visitors</p>
                      <p className="text-sm font-bold text-[#3b82f6]">12.5K</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/4 -bottom-4 bg-[#1c1c24]/90 backdrop-blur-sm border border-[#3b82f6]/20 rounded-xl p-3 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#a0a0a0]">Rating</p>
                      <p className="text-sm font-bold text-amber-400">4.9/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      {/* Float animation */}
      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }`}</style>
    </section>
  );
};

export default Hero;