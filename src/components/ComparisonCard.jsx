import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, DollarSign, Star, Users, Car, ChevronDown, ChevronUp } from 'lucide-react';

const ComparisonCard = ({ brand, onRemove }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-slate-200"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white relative">
        <button
          onClick={() => onRemove(brand.id)}
          className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
        <p className="text-sm text-white/90">{brand.description}</p>
      </div>

      {/* Rating */}
      <div className="px-6 py-4 bg-amber-50 border-b border-amber-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-2xl font-bold text-slate-900">{brand.rating}</span>
            <span className="text-sm text-slate-600">/ 5.0</span>
          </div>
          <span className="text-sm text-slate-600">{brand.totalReviews} reviews</span>
        </div>
      </div>

      {/* Price Range */}
      <div className="px-6 py-4 border-b border-slate-200">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between hover:bg-slate-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
        >
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-slate-900">Price Range</h4>
          </div>
          {expandedSection === 'price' ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        <motion.div
          initial={false}
          animate={{ height: expandedSection === 'price' ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Base Fare:</span>
              <span className="font-semibold text-slate-900">${brand.pricing.baseFare}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Per Mile:</span>
              <span className="font-semibold text-slate-900">${brand.pricing.perMile}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Per Minute:</span>
              <span className="font-semibold text-slate-900">${brand.pricing.perMinute}</span>
            </div>
            <div className="pt-2 mt-2 border-t border-slate-200">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-900">Estimated 10mi trip:</span>
                <span className="text-green-600">
                  ${(brand.pricing.baseFare + brand.pricing.perMile * 10 + brand.pricing.perMinute * 15).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vehicle Types */}
      <div className="px-6 py-4 border-b border-slate-200">
        <button
          onClick={() => toggleSection('vehicles')}
          className="w-full flex items-center justify-between hover:bg-slate-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
        >
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-slate-900">Vehicle Types</h4>
          </div>
          {expandedSection === 'vehicles' ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        <motion.div
          initial={false}
          animate={{ height: expandedSection === 'vehicles' ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-3 space-y-2">
            {brand.vehicleTypes.map((vehicle, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-600" />
                  <span className="text-sm font-medium text-slate-900">{vehicle.name}</span>
                </div>
                <span className="text-xs text-slate-600">{vehicle.capacity} passengers</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="px-6 py-4">
        <button
          onClick={() => toggleSection('features')}
          className="w-full flex items-center justify-between hover:bg-slate-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
        >
          <h4 className="font-semibold text-slate-900">Key Features</h4>
          {expandedSection === 'features' ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        <motion.div
          initial={false}
          animate={{ height: expandedSection === 'features' ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-3 space-y-2">
            {brand.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Availability */}
      <div className="px-6 py-4 bg-slate-50">
        <div className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Coverage:</span> {brand.availability}
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonCard;
