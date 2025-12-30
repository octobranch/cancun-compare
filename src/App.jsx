import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TransportationComparison from '@/components/TransportationComparison';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Cancun Transportation Compare - Find Your Perfect Airport Transfer</title>
        <meta name="description" content="The #1 comparison tool for Cancun airport transfers. Compare prices, reviews, and vehicles from top providers like USA Transfers, Happy Shuttle, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <TransportationComparison />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
