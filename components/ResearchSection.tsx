
import React from 'react';

const ResearchSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center">
          <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-slate-900">How We Research</h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-600">
            InvestSnips verifies all data through public filings, exchange releases, and credible market sources.
          </p>
          <div className="mt-6 flex justify-center items-center gap-6">
            <a href="#" className="text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline">
              Methodology
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline">
              Data Transparency
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
