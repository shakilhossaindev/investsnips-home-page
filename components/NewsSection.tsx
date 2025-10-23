
import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import type { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
  return (
    <a href={article.href} className="group flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-lg hover:border-teal-300">
      <div className="w-full sm:w-1/3 flex-shrink-0">
        <img src={article.image} alt={article.title} className="w-full h-40 sm:h-full object-cover rounded-lg" />
      </div>
      <div>
        <p className="text-sm font-semibold text-teal-600">{article.category}</p>
        <h3 className="mt-2 font-poppins font-semibold text-lg text-slate-900 group-hover:text-teal-700">{article.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{article.summary}</p>
      </div>
    </a>
  );
};

const NewsSection: React.FC = () => {
  return (
    <section className="bg-slate-100/70 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-slate-900">News & Insights</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Stay ahead of the curve with our latest market analysis and news.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <NewsCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
