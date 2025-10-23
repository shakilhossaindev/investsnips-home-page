
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketSnapshot from './components/MarketSnapshot';
import FeaturedTrackers from './components/FeaturedTrackers';
import ExploreCrypto from './components/ExploreCrypto';
import ExploreMarket from './components/ExploreMarket';
import LearnSection from './components/LearnSection';
import NewsSection from './components/NewsSection';
import ResearchSection from './components/ResearchSection';
import NewsletterCTA from './components/NewsletterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 overflow-x-hidden">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <MarketSnapshot />
          <FeaturedTrackers />
          <ExploreCrypto />
          <ExploreMarket />
          <LearnSection />
          <NewsSection />
          <ResearchSection />
          <NewsletterCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
