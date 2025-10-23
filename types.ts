import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

export interface MarketCardData {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  // Fix: Use React.ReactElement instead of JSX.Element to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
}

export interface TrackerCardData {
    title: string;
    description: string;
    // Fix: Use React.ReactElement instead of JSX.Element to resolve "Cannot find namespace 'JSX'" error.
    icon: React.ReactElement;
}

export interface LearnArticle {
    image: string;
    category: string;
    title: string;
    href: string;
}

export interface NewsArticle {
    image: string;
    category: string;
    title: string;
    summary: string;
    href: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface LinkCategory {
  title: string;
  links: Link[];
}
