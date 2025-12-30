import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Check } from 'lucide-react';
import { transportationBrands } from '@/data/transportationData';

const BrandSelector = ({ isOpen, onClose, onSelect, selectedBrands, maxSelections }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBrands = transportationBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (brandId) => {
    onSelect(brandId);
    if (selectedBrands.length + 1 >= maxSelections) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Select Transportation Brand
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
                />
              </div>

              <p className="text-sm text-slate-500 mt-2">
                Selected: {selectedBrands.length}/{maxSelections}
              </p>
            </div>

            {/* Brand List */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-4">
                {filteredBrands.map((brand) => {
                  const isSelected = selectedBrands.includes(brand.id);
                  const isDisabled = !isSelected && selectedBrands.length >= maxSelections;

                  return (
                    <motion.button
                      key={brand.id}
                      whileHover={!isDisabled ? { scale: 1.02 } : {}}
                      whileTap={!isDisabled ? { scale: 0.98 } : {}}
                      onClick={() => !isDisabled && !isSelected && handleSelect(brand.id)}
                      disabled={isDisabled}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        isSelected
                          ? 'border-green-500 bg-green-50'
                          : isDisabled
                          ? 'border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed'
                          : 'border-slate-200 hover:border-indigo-500 hover:bg-indigo-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-slate-900">
                              {brand.name}
                            </h3>
                            {isSelected && (
                              <Check className="w-5 h-5 text-green-600" />
                            )}
                          </div>
                          <p className="text-sm text-slate-600 mb-2">
                            {brand.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                              {brand.vehicleTypes.length} vehicle types
                            </span>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full">
                              ★ {brand.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {filteredBrands.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500">No brands found matching your search</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BrandSelector;
