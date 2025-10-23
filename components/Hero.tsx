
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
          Smart Investing Starts With Data
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          Your shortcut to smart investing in public companies, crypto, and ETFs.
          Start making informed choices across sectors today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-block px-8 py-3 text-base font-semibold text-white bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 transition-all"
          >
            View Stock Categories
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-block px-8 py-3 text-base font-semibold text-teal-700 bg-teal-100 rounded-lg hover:bg-teal-200/80 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all"
          >
            Explore Crypto Treasuries
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
