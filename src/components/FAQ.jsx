import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is it safe to take a taxi at Cancun Airport?",
    answer: "While generally safe inside the airport zone, standard taxis can be very expensive and unregulated compared to pre-booked private transfers. We strongly recommend booking a private transfer in advance for safety, fixed pricing, and peace of mind."
  },
  {
    question: "How far is Tulum from Cancun Airport?",
    answer: "Tulum is approximately 73 miles (118 km) south of Cancun International Airport. The drive typically takes between 1.5 to 2 hours depending on traffic and exact destination within Tulum."
  },
  {
    question: "Do these companies provide car seats for children?",
    answer: "Yes, most major private transfer companies (like Happy Shuttle and USA Transfers) offer car seats upon request. Usually, there is a field to request them during the booking process, often free of charge."
  },
  {
    question: "Should I tip my driver?",
    answer: "Tipping is not mandatory but is customary and appreciated in Mexico for good service. A standard tip for a private transfer is typically $5-10 USD per trip, or more if the driver helps significantly with luggage or makes a stop."
  },
  {
    question: "Can I pay in US Dollars?",
    answer: "Yes, US Dollars are widely accepted by all major transportation companies in Cancun. However, using Mexican Pesos or paying by credit card in advance often yields a slightly better exchange rate."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Questions
          </h3>
          <p className="text-slate-600">
            Everything you need to know about getting around the Riviera Maya.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-lg pr-8">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
