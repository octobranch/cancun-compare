import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Chicago, IL",
    text: "Saved us almost $50 on our roundtrip to Playa Mujeres. Comparing USA Transfers against the hotel shuttle price was a no-brainer. Highly recommend using this tool!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "I was confused by all the options at Cancun airport. This site helped me find a private van with car seats for my twins. Happy Shuttle was excellent.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Elena Rodriguez",
    location: "Austin, TX",
    text: "Quick, easy, and efficient. I didn't realize how much prices varied between companies until I saw them side-by-side here. eTransfers worked out great for us.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Travelers Like You
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
              <Quote className="w-10 h-10 text-indigo-400 opacity-50 mb-4" />
              <p className="text-slate-300 mb-6 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-600"
                 src="https://images.unsplash.com/photo-1579695164284-8374fda58286" />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
