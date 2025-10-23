
import type { NavItem, MarketCardData, TrackerCardData, LearnArticle, NewsArticle, LinkCategory, Link } from './types';
import { BtcIcon, EthIcon, SandPIcon, ChartIcon, FileTextIcon, AiIcon, ArrowRightIcon, CompareIcon } from './components/Icons';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Stocks', href: '#' },
  { 
    label: 'Crypto', 
    href: '#',
    submenu: [
      { label: 'Crypto Hub', href: '#' },
      { label: 'Treasuries', href: '#' },
      { label: 'Bitcoin Hub', href: '#' },
      { label: 'Ethereum Hub', href: '#' },
      { label: 'Comparisons', href: '#' },
      { label: 'Safety', href: '#' },
    ]
  },
  { label: 'ETFs', href: '#' },
  { label: 'Learn', href: '#' },
  { label: 'News & Insights', href: '#' },
  { label: 'Tools', href: '#' },
  { label: 'About', href: '#' },
];

export const MARKET_DATA: MarketCardData[] = [
    // Fix: Use React.createElement to avoid JSX syntax in a .ts file.
    { name: 'S&P 500', value: '5,487.03', change: '+0.25%', isPositive: true, icon: React.createElement(SandPIcon) },
    // Fix: Use React.createElement to avoid JSX syntax in a .ts file.
    { name: 'Bitcoin (BTC)', value: '$65,045.12', change: '-1.85%', isPositive: false, icon: React.createElement(BtcIcon) },
    // Fix: Use React.createElement to avoid JSX syntax in a .ts file.
    { name: 'Ethereum (ETH)', value: '$3,510.99', change: '-0.77%', isPositive: false, icon: React.createElement(EthIcon) },
];

export const TRACKER_DATA: TrackerCardData[] = [
    // Fix: Use React.createElement to avoid JSX syntax in a .ts file.
    { title: 'Company Treasuries', description: 'Track public companies holding Bitcoin and other crypto assets.', icon: React.createElement(FileTextIcon) },
    // Fix: Use React.createElement to avoid JSX syntax in a .ts file.
    { title: 'AI Stock List', description: 'A curated list of top-performing AI and machine learning stocks.', icon: React.createElement(AiIcon) },
    // Fix: Use React.createElement to avoid JSX syntax in a .ts file.
    { title: 'Treasury Yields', description: 'Monitor real-time U.S. treasury yield rates across different terms.', icon: React.createElement(ChartIcon) },
];

export const CRYPTO_EXPLORE_DATA: TrackerCardData[] = [
    { title: 'Company Crypto Treasuries', description: 'See which public companies are holding Bitcoin and other digital assets on their balance sheets.', icon: React.createElement(FileTextIcon) },
    { title: 'Bitcoin ETFs Explained', description: 'Understand how Bitcoin ETFs work, their benefits, and risks for your investment portfolio.', icon: React.createElement(ChartIcon) },
    { title: 'Bitcoin vs Ethereum', description: 'A detailed comparison of the two largest cryptocurrencies by market cap, tech, and use case.', icon: React.createElement(CompareIcon) },
];

export const US_STOCK_GRID_LINKS: LinkCategory = {
    title: 'The U.S. Stock Grid',
    links: [
        { label: 'Stocks by Sector and Industry', href: '#' },
        { label: 'Publicly Traded Companies by State', href: '#' },
        { label: 'Large-Cap Stocks', href: '#' },
        { label: 'Mid-Cap Stocks', href: '#' },
        { label: 'Small-Cap Stocks', href: '#' },
        { label: 'Micro-Cap Stocks', href: '#' },
        { label: 'Foreign Stocks on U.S. Exchanges', href: '#' },
        { label: 'Recent IPOs', href: '#' },
        { label: 'S&P 500 Index', href: '#' },
        { label: 'NASDAQ 100', href: '#' },
        { label: 'Dow 30', href: '#' },
    ],
};

export const SP500_SECTOR_LINKS: LinkCategory = {
    title: 'S&P 500 Index Sector and Industry Links',
    links: [
        { label: 'Sector SPDR Quote Board', href: '#' },
        { label: 'S&P 500 Consumer Discretionary Stocks', href: '#' },
        { label: 'S&P 500 Consumer Staples Stocks', href: '#' },
        { label: 'S&P 500 Energy Stocks', href: '#' },
        { label: 'S&P 500 Financial Stocks', href: '#' },
        { label: 'S&P 500 Healthcare Stocks', href: '#' },
        { label: 'S&P 500 Industrial Stocks', href: '#' },
        { label: 'S&P 500 Materials Stocks', href: '#' },
        { label: 'S&P 500 Real Estate Stocks', href: '#' },
        { label: 'S&P 500 Technology Stocks', href: '#' },
        { label: 'S&P 500 Telecom Stocks', href: '#' },
        { label: 'S&P 500 Utilities Stocks', href: '#' },
    ],
};

export const STOCK_CATEGORIES: LinkCategory[] = [
    {
        title: 'Stock Categories',
        links: [
            { label: 'Advertising and Marketing', href: '#' },
            { label: 'Aerospace and Defense', href: '#' },
            { label: 'Agriculture', href: '#' },
            { label: 'Agricultural Chemicals', href: '#' },
            { label: 'Airlines', href: '#' },
            { label: 'Apartment REITs', href: '#' },
            { label: 'Asset Management', href: '#' },
            { label: 'Athletic Apparel', href: '#' },
            { label: 'Automobile Manufacturers', href: '#' },
            { label: 'Automobile Retailers', href: '#' },
            { label: 'Auto Parts', href: '#' },
            { label: 'Auto Part Stores', href: '#' },
            { label: 'Auto Racing', href: '#' },
            { label: 'Aviation', href: '#' },
            { label: 'Banks', href: '#' },
            { label: 'Beauty Products', href: '#' },
        ]
    },
    {
        title: 'Stock Categories',
        links: [
            { label: 'Cruise Ships', href: '#' },
            { label: 'Cybersecurity', href: '#' },
            { label: 'Data Center REITs', href: '#' },
            { label: 'Diagnostics', href: '#' },
            { label: 'Digital Advertising and Marketing', href: '#' },
            { label: 'Discount Stores', href: '#' },
            { label: 'Donuts and Candy', href: '#' },
            { label: 'Downstream Oil & Gas', href: '#' },
            { label: 'Drug Stores', href: '#' },
            { label: 'Dry Bulk Shipping', href: '#' },
            { label: 'Ecommerce', href: '#' },
            { label: 'Education', href: '#' },
            { label: 'Energy', href: '#' },
            { label: 'Entertainment', href: '#' },
            { label: 'Environmental Services', href: '#' },
        ]
    },
    {
        title: 'Stock Categories',
        links: [
            { label: 'Internet', href: '#' },
            { label: 'Jewelry Stores', href: '#' },
            { label: 'Life Insurance', href: '#' },
            { label: 'LNG Tankers', href: '#' },
            { label: 'Logistics', href: '#' },
            { label: 'Materials', href: '#' },
            { label: 'Meat', href: '#' },
            { label: 'Media', href: '#' },
            { label: 'Medical Devices', href: '#' },
            { label: 'Medical REITs', href: '#' },
            { label: 'Midstream Oil & Gas', href: '#' },
            { label: 'Mining and Metals', href: '#' },
            { label: 'Molecular Diagnostics', href: '#' },
            { label: 'Motor Vehicles', href: '#' },
            { label: 'Movie Production', href: '#' },
        ]
    },
    {
        title: 'Stock Categories',
        links: [
            { label: 'Security Companies', href: '#' },
            { label: 'Self-Storage REITs', href: '#' },
            { label: 'Semiconductors', href: '#' },
            { label: 'Senior Living', href: '#' },
            { label: 'Shipping', href: '#' },
            { label: 'Shoe Companies', href: '#' },
            { label: 'Shoe Stores', href: '#' },
            { label: 'Silver', href: '#' },
            { label: 'Sin Stocks', href: '#' },
            { label: 'Ski Resorts', href: '#' },
            { label: 'Snack Food', href: '#' },
            { label: 'Social Media', href: '#' },
            { label: 'Soft Drinks', href: '#' },
            { label: 'Software', href: '#' },
            { label: 'Solar', href: '#' },
        ]
    }
];

export const SECTOR_BUTTONS: Link[] = [
    { label: 'Companies in the S&P 500 by Category', href: '#' },
    { label: 'Financial Sector Stocks in the S&P 500', href: '#' },
    { label: 'Real Estate Stocks in the S&P 500', href: '#' },
    { label: 'Consumer Discretionary Stocks in the S&P 500', href: '#' },
    { label: 'Healthcare stocks in the S&P 500', href: '#' },
    { label: 'Technology stocks in the S&P 500', href: '#' },
    { label: 'Consumer Staples Stocks in the S&P 500', href: '#' },
    { label: 'Industrial Sector Stocks in the S&P 500', href: '#' },
    { label: 'Telecommunications Stocks in the S&P 500', href: '#' },
    { label: 'Oil & Gas Stocks in the S&P 500', href: '#' },
    { label: 'Materials Sector Stocks in the S&P 500', href: '#' },
    { label: 'List of Utilities Stocks in the S&P 500', href: '#' },
];

export const LEARN_ARTICLES: LearnArticle[] = [
    { image: 'https://picsum.photos/seed/learn1/600/400', category: 'Crypto Basics', title: 'What Is Bitcoin and How Does It Work?', href: '#' },
    { image: 'https://picsum.photos/seed/learn2/600/400', category: 'Stock Market', title: 'Understanding ETFs vs. Mutual Funds', href: '#' },
    { image: 'https://picsum.photos/seed/learn3/600/400', category: 'Investing 101', title: 'A Beginner\'s Guide to Diversification', href: '#' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
    { image: 'https://picsum.photos/seed/news1/600/400', category: 'Market Analysis', title: 'Fed Signals Potential Rate Cuts Later This Year', summary: 'Investors react to the latest statements from the Federal Reserve, hinting at a shift in monetary policy.', href: '#' },
    { image: 'https://picsum.photos/seed/news2/600/400', category: 'Technology', title: 'The AI Revolution: Which Chipmaker Will Dominate?', summary: 'A deep dive into the competitive landscape of semiconductor companies powering the AI boom.', href: '#' },
    { image: 'https://picsum.photos/seed/news3/600/400', category: 'Cryptocurrency', title: 'Ethereum\'s Next Major Upgrade: What to Expect', summary: 'Experts weigh in on the potential impact of the upcoming "Pectra" upgrade on the Ethereum network.', href: '#' },
    { image: 'https://picsum.photos/seed/news4/600/400', category: 'Global Economy', title: 'Emerging Markets Show Resilience Amidst Uncertainty', summary: 'Despite global headwinds, certain emerging economies are showing surprising growth and stability.', href: '#' },
];
