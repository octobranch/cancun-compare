import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Plus } from 'lucide-react';
import BrandSelector from '@/components/BrandSelector';
import ComparisonCard from '@/components/ComparisonCard';
import { transportationBrands } from '@/data/transportationData';

const TransportationComparison = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showSelector, setShowSelector] = useState(false);

  const addBrand = (brandId) => {
    if (selectedBrands.length < 4 && !selectedBrands.includes(brandId)) {
      setSelectedBrands([...selectedBrands, brandId]);
    }
  };

  const removeBrand = (brandId) => {
    setSelectedBrands(selectedBrands.filter(id => id !== brandId));
  };

  const selectedBrandData = selectedBrands.map(id => 
    transportationBrands.find(brand => brand.id === id)
  );

  return (
    <section id="compare" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car className="w-10 h-10 text-indigo-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Compare Providers
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select up to 4 brands to compare their prices, vehicle capacity, and reviews side-by-side.
          </p>
        </motion.div>

        {/* Add Brand Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={() => setShowSelector(true)}
            disabled={selectedBrands.length >= 4}
            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 font-semibold text-lg"
          >
            <Plus className="w-6 h-6" />
            {selectedBrands.length === 0 ? "Select First Brand to Compare" : "Add Another Brand"}
            {selectedBrands.length > 0 && (
              <span className="ml-2 px-2.5 py-0.5 bg-white/20 rounded-full text-sm">
                {selectedBrands.length}/4
              </span>
            )}
          </button>
        </motion.div>

        {/* Comparison Grid */}
        <div className="min-h-[400px]">
          {selectedBrands.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                Ready to Compare
              </h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">
                Click the button above to start adding transportation providers to your comparison grid.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`grid gap-6 ${
                selectedBrands.length === 1 
                  ? 'grid-cols-1 max-w-md mx-auto' 
                  : selectedBrands.length === 2 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : selectedBrands.length === 3
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              <AnimatePresence mode="popLayout">
                {selectedBrandData.map((brand) => (
                  <ComparisonCard
                    key={brand.id}
                    brand={brand}
                    onRemove={removeBrand}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Brand Selector Modal */}
        <BrandSelector
          isOpen={showSelector}
          onClose={() => setShowSelector(false)}
          onSelect={addBrand}
          selectedBrands={selectedBrands}
          maxSelections={4}
        />
      </div>
    </section>
  );
};

export default TransportationComparison;
