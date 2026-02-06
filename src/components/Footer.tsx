import { Linkedin, Instagram, Facebook, Dribbble } from 'lucide-react';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/rielart', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/rielart', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/rielart', label: 'Facebook' },
  { icon: Dribbble, href: 'https://dribbble.com/rielart', label: 'Dribbble' },
];

const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="font-display font-bold text-2xl tracking-wider mb-4 inline-block">
              RIELART
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Empowering startups and small businesses with impactful digital experiences through web design, branding, and marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">More</h4>
            <ul className="space-y-3">
              {footerLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-primary-foreground/70 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} RielArt Studio. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Made with passion by <span className="text-accent">Gabriel Macovei</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
