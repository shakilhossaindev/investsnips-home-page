
import React from 'react';
import { US_STOCK_GRID_LINKS, SP500_SECTOR_LINKS } from '../constants';
import type { LinkCategory } from '../types';

const LinkListCard: React.FC<{ category: LinkCategory }> = ({ category }) => (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/80 shadow-sm h-full">
        <h3 className="font-poppins font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-3">{category.title}</h3>
        <ul className="space-y-2">
            {category.links.map(link => (
                <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-600 hover:text-teal-600 hover:underline transition-colors">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const ExploreMarket: React.FC = () => {
    return (
        <section className="bg-slate-100/70 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-slate-900">Explore The Stock Market</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                        Browse stocks by category, index, and sector to find your next investment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <LinkListCard category={US_STOCK_GRID_LINKS} />
                    <LinkListCard category={SP500_SECTOR_LINKS} />
                </div>
                
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block px-8 py-3 text-base font-semibold text-white bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 transition-all"
                    >
                        View All Stock Categories →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExploreMarket;
