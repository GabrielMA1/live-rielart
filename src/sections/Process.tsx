import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.process-header',
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

      gsap.fromTo('.process-step-item',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-steps',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery',
      description: 'We start with a deep dive into your business, goals, and target audience. This ensures every decision is strategic and aligned with your objectives.',
      duration: '30 min call',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Design',
      description: 'We create wireframes and high-fidelity designs, iterating based on your feedback until everything feels perfect.',
      duration: '1-2 weeks',
    },
    {
      number: '03',
      icon: Code,
      title: 'Development',
      description: 'Your design comes to life in Webflow—clean, responsive, and optimized for performance and conversions.',
      duration: '1-2 weeks',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We handle the launch, set up analytics, and provide ongoing support to ensure your site keeps performing.',
      duration: 'Ongoing',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-flowing bg-[#0a0a0f] py-20 lg:py-28"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="process-header text-center mb-16">
          <span className="mono text-[#3b82f6] mb-4 block">OUR PROCESS</span>
          <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
            Simple, Strategic,<br />Stress-Free
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Our 4-step process ensures you get a website that looks great, 
            ranks well, and converts visitors into clients.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-steps relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3b82f6] via-[#06b6d4] to-transparent origin-top hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="process-step-item relative flex gap-6 md:gap-10"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center animate-pulse-glow-blue">
                    <span className="text-xl font-['Space_Grotesk'] font-bold text-[#3b82f6]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="card-dark flex-1 p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-[#3b82f6]" />
                      </div>
                      <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#f0f0f0]">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-xs mono text-[#a0a0a0] bg-[#1c1c24] px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">
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

export default Process;
