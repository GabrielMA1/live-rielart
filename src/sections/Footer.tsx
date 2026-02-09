import { ArrowUpRight, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Brand Identity', href: '#services' },
      { label: 'Web Design', href: '#services' },
      { label: 'Paid Ads', href: '#services' },
      { label: 'Growth Support', href: '#services' },
    ],
    company: [
      { label: 'Our Work', href: '#portfolio' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    family: [
      { label: 'GMACOVEI', href: 'https://gmacovei.com' },
      { label: 'Spotix', href: 'https://myspotix.com' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:hello@rielart.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2a2a35]">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-['Space_Grotesk'] font-bold text-[#f0f0f0]">
                RielArt
              </span>
            </a>
            <p className="text-[#a0a0a0] mb-6 max-w-sm">
              Custom websites, branding, and paid ad campaigns for startups 
              and small businesses ready to grow.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="w-10 h-10 rounded-xl bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center hover:border-[#3b82f6]/40 hover:bg-[#252530] transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 text-[#a0a0a0]" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mono text-[#f0f0f0] mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-[#3b82f6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mono text-[#f0f0f0] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-[#3b82f6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Family */}
          <div>
            <h4 className="mono text-[#f0f0f0] mb-4">Family</h4>
            <ul className="space-y-3">
              {footerLinks.family.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0a0a0] hover:text-[#3b82f6] transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2a2a35] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#a0a0a0]">
            © {currentYear} RielArt. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#a0a0a0]">
              Part of the{' '}
              <a 
                href="https://gmacovei.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#3b82f6] hover:underline"
              >
                Gabriel Macovei
              </a>{' '}
              family
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
