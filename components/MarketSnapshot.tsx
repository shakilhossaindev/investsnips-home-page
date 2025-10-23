
import React from 'react';
import { MARKET_DATA } from '../constants';
import type { MarketCardData } from '../types';

const MarketCard: React.FC<{ data: MarketCardData }> = ({ data }) => {
  const changeColor = data.isPositive ? 'text-green-500' : 'text-red-500';
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/80 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="text-slate-500">{data.icon}</div>
          <h3 className="font-semibold text-slate-800">{data.name}</h3>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-slate-900">{data.value}</p>
        <p className={`mt-1 text-sm font-medium ${changeColor}`}>{data.change}</p>
      </div>
    </div>
  );
};

const MarketSnapshot: React.FC = () => {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MARKET_DATA.map((item) => (
            <MarketCard key={item.name} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSnapshot;
