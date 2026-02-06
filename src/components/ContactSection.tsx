import { useState } from 'react';
import { Send, Calendar, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-foreground via-foreground to-primary/90 text-primary-foreground">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Book a free discovery call and let's discuss your project. We're excited to learn about your goals and show you how we can help.
            </p>

            {/* Alternative Contact Options */}
            <div className="space-y-4">
              <a
                href="https://calendly.com/rielart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Calendar size={22} className="text-accent-foreground" />
                </div>
                <div>
                  <span className="font-semibold block">Book a Call</span>
                  <span className="text-primary-foreground/70 text-sm">Schedule a free discovery session</span>
                </div>
              </a>

              <a
                href="mailto:hello@rielart.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Mail size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <span className="font-semibold block">Email Us Directly</span>
                  <span className="text-primary-foreground/70 text-sm">hello@rielart.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-xl">
            <h3 className="font-display text-xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="branding">Branding</option>
                    <option value="ads">Ads Management</option>
                    <option value="all">All Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select budget</option>
                    <option value="<3k">Less than $3k</option>
                    <option value="3k-5k">$3k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k+">$10k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn-accent w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-base"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
