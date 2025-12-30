import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Select Brands',
    description: 'Choose up to 4 transportation companies from our curated list of top providers.'
  },
  {
    icon: ArrowLeftRight,
    title: 'Compare Features',
    description: 'See side-by-side pricing, vehicle options, and reviews to make an informed choice.'
  },
  {
    icon: CheckCircle2,
    title: 'Book & Relax',
    description: 'Choose the winner and book directly with confidence for a stress-free arrival.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-3">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Three Steps to a Smooth Arrival
            </h3>
            <p className="text-lg text-slate-600 mb-12">
              Our tool simplifies the chaotic process of finding airport transfers in Mexico. No more haggling with taxi drivers or getting surprised by hidden fees.
            </p>

            <div className="space-y-12 relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-100 hidden md:block" />

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10 shadow-lg ring-4 ring-white">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1597816826456-97d8b58a134a?auto=format&fit=crop&q=80" 
                alt="Tourists arriving at Cancun airport" 
                className="w-full h-auto object-cover"
               src="https://images.unsplash.com/photo-1571654709714-6079ba0f3721" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
