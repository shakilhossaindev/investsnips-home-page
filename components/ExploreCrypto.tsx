
import React from 'react';
import { CRYPTO_EXPLORE_DATA } from '../constants';
import type { TrackerCardData } from '../types';
import { ArrowRightIcon } from './Icons';

const CryptoCard: React.FC<{ data: TrackerCardData }> = ({ data }) => {
  return (
    <a href="#" className="group block bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-lg hover:border-teal-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="text-teal-500 mb-4">{data.icon}</div>
      <h3 className="font-poppins font-semibold text-slate-900 text-lg">{data.title}</h3>
      <p className="mt-2 text-slate-600 text-sm flex-grow">{data.description}</p>
      <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
          <span>Learn More</span>
          <ArrowRightIcon />
      </div>
    </a>
  );
};

const ExploreCrypto: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-slate-900">Explore Crypto Markets</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Get up to speed on the key trends and assets in the digital economy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CRYPTO_EXPLORE_DATA.map((item) => (
            <CryptoCard key={item.title} data={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <a
            href="#"
            className="inline-block px-8 py-3 text-base font-semibold text-white bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 transition-all"
          >
            Visit Crypto Hub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreCrypto;
