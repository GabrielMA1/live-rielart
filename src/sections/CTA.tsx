import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Check, Mail, User, Building, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.contact-form-field',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', businessName: '', message: '' });
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-flowing bg-[#0a0a0f] py-20 lg:py-28"
    >
      <div className="container-wide">
        <div className="cta-content grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div>
            <span className="mono text-[#3b82f6] mb-4 block">GET IN TOUCH</span>
            <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
              Ready to Grow<br />Your Business?
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-8">
              Let&apos;s discuss your project. Fill out the form and we&apos;ll 
              get back to you within 2 business days.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <a href="mailto:hello@rielart.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center group-hover:border-[#3b82f6]/40 transition-colors">
                  <Mail className="w-5 h-5 text-[#a0a0a0] group-hover:text-[#3b82f6] transition-colors" />
                </div>
                <span className="text-[#f0f0f0] group-hover:text-[#3b82f6] transition-colors">
                  hello@rielart.com
                </span>
              </a>
              <a href="tel:+16479063547" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center group-hover:border-[#3b82f6]/40 transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#a0a0a0] group-hover:text-[#3b82f6] transition-colors" />
                </div>
                <span className="text-[#f0f0f0] group-hover:text-[#3b82f6] transition-colors">
                  647-906-3547
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center">
                  <Building className="w-5 h-5 text-[#a0a0a0]" />
                </div>
                <span className="text-[#f0f0f0]">Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form">
            <div className="card-dark p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                    <Check className="w-7 h-7 text-[#3b82f6]" />
                  </div>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[#a0a0a0]">
                    Thanks for reaching out. We&apos;ll get back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <form 
                  // FORMSPREE: Replace the action URL below with your Formspree endpoint
                  // Example: action="https://formspree.io/f/xrbzqpzy"
                  action="https://formspree.io/f/YOUR_FORM_ID" 
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="contact-form-field">
                    <label className="block text-sm text-[#a0a0a0] mb-2">Your Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="pl-11"
                      />
                    </div>
                  </div>

                  <div className="contact-form-field">
                    <label className="block text-sm text-[#a0a0a0] mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="pl-11"
                      />
                    </div>
                  </div>

                  <div className="contact-form-field">
                    <label className="block text-sm text-[#a0a0a0] mb-2">Business Name</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Your Business"
                        className="pl-11"
                      />
                    </div>
                  </div>

                  <div className="contact-form-field">
                    <label className="block text-sm text-[#a0a0a0] mb-2">Tell us about your project</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="I'm looking for a new website for my business..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
