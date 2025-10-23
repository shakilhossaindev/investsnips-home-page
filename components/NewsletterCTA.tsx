
import React from 'react';

const NewsletterCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-700 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-600/40 [mask-image:linear-gradient(to_bottom,white_30%,transparent)]"></div>
          <div className="relative">
            <h2 className="font-poppins text-3xl font-bold text-white">Weekly concise brief. No hype.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300">
              Get the most important financial news and insights delivered to your inbox every week.
            </p>
            <form className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-slate-400 bg-slate-800/50 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 text-slate-900 font-semibold rounded-md shadow-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
