import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a website cost?',
    answer: 'It depends on the complexity, scope, and specific features your business needs. We\'ll provide a custom quote after a free discovery call to understand your goals.',
  },
  {
    question: 'How long will it take to get a new website?',
    answer: 'Most projects take between 3–6 weeks, depending on how quickly we receive content and feedback. We\'ll outline timelines during the planning phase.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. All our Webflow websites are fully responsive and tested across devices and screen sizes.',
  },
  {
    question: 'What if I need help on my site down the road?',
    answer: 'We offer flexible ongoing support plans — from SEO growth to content updates. We\'re happy to grow with you long after the launch.',
  },
  {
    question: 'Can I access the backend myself?',
    answer: 'Yes. Webflow\'s Editor makes it easy to update content yourself. We also provide a short training session or video tutorials for your team.',
  },
  {
    question: 'Do you offer SEO after the site is launched?',
    answer: 'Definitely. SEO is one of our core services. We can continue optimizing your content, building backlinks, and tracking rankings to help you grow over time.',
  },
  {
    question: 'Do you write the content, or do I need to provide it?',
    answer: 'We can work either way. If you have content ready, we\'ll optimize it. If not, we offer content writing as an add-on to make the process easier and more effective.',
  },
  {
    question: 'What platforms do you build on?',
    answer: 'We specialize in Webflow — it gives you flexibility, speed, and control without the complexity of traditional CMS platforms.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Let's answer some common questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Still unsure about working with us? Here are answers to the most frequent questions clients ask. 
            If you have more, feel free to reach out directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-display font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <span 
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-accent text-accent-foreground rotate-180' 
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div 
                className={`accordion-content ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
