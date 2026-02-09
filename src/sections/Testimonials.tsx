import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-header',
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

      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "RielArt transformed our online presence completely. The new website increased our leads by 200% in just two months.",
      author: 'Sarah Chen',
      role: 'Founder, Lumina Studio',
      rating: 5,
    },
    {
      quote: "Working with Gabriel was a breeze. He understood our vision immediately and delivered beyond our expectations.",
      author: 'Michael Torres',
      role: 'CEO, TechFlow',
      rating: 5,
    },
    {
      quote: "The attention to detail and strategic thinking that went into our brand and website was exceptional. Highly recommend!",
      author: 'Emma Wilson',
      role: 'Marketing Director, Artisan Coffee',
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-flowing bg-[#121218] py-20 lg:py-28"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <span className="mono text-[#3b82f6] mb-4 block">TESTIMONIALS</span>
          <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
            What Clients Say
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it—here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="testimonial-card"
            >
              <div className="card-dark p-8 h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-[#3b82f6]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3b82f6] text-[#3b82f6]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#f0f0f0] leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#2a2a35]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] flex items-center justify-center">
                    <span className="text-lg font-['Space_Grotesk'] font-bold text-white">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-[#f0f0f0]">{testimonial.author}</div>
                    <div className="text-sm text-[#a0a0a0]">{testimonial.role}</div>
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

export default Testimonials;
