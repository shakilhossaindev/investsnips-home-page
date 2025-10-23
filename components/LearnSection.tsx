
import React from 'react';
import { LEARN_ARTICLES } from '../constants';
import type { LearnArticle } from '../types';

const LearnCard: React.FC<{ article: LearnArticle }> = ({ article }) => {
  return (
    <a href={article.href} className="group block overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
      <div className="p-6">
        <p className="text-sm font-semibold text-teal-600">{article.category}</p>
        <h3 className="mt-2 font-poppins font-semibold text-lg text-slate-900 group-hover:text-teal-700">{article.title}</h3>
      </div>
    </a>
  );
};

const LearnSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-slate-900">Learn About Investing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Build your financial literacy with our straightforward guides and tutorials.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEARN_ARTICLES.map((article) => (
            <LearnCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
