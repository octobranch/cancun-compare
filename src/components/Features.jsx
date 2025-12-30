import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, DollarSign, Clock, ThumbsUp, Map, Smartphone } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Best Price Guarantee',
    description: 'Compare rates instantly to ensure you never overpay for your airport transfer.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Safety',
    description: 'All listed providers are licensed, insured, and vetted for your peace of mind.'
  },
  {
    icon: Clock,
    title: 'Reliable Pickup',
    description: 'Track punctuality ratings to ensure your driver is there when you land.'
  },
  {
    icon: ThumbsUp,
    title: 'Real Reviews',
    description: 'See honest feedback from thousands of travelers who visited Cancun before you.'
  },
  {
    icon: Map,
    title: 'Wide Coverage',
    description: 'From Cancun Hotel Zone to Tulum, Playa del Carmen, and Akumal.'
  },
  {
    icon: Smartphone,
    title: 'No Hidden Fees',
    description: 'Clear pricing breakdown including taxes, airport fees, and tips.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-3">Why Use Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Smart Transportation Decisions Made Easy
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't start your vacation with stress. We help you find reliable transportation at the best price.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
