
import React, { useState, useRef, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import type { NavItem } from '../types';
import { LogoIcon, ChevronDownIcon } from './Icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const renderNavLinks = (items: NavItem[], isMobile: boolean = false) => {
    const linkClass = isMobile ? 'block py-2 px-3 text-slate-800 rounded hover:bg-slate-100' : 'text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors';

    return items.map((item) => (
      <li key={item.label} className="relative">
        {item.submenu ? (
          <div>
            <button
              onClick={() => toggleDropdown(item.label)}
              className={`${linkClass} flex items-center gap-1 w-full text-left`}
            >
              {item.label}
              <ChevronDownIcon />
            </button>
            {openDropdown === item.label && (
              <div ref={dropdownRef} className={isMobile ? "pl-4" : "absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-20"}>
                <ul className={isMobile ? "" : "bg-white rounded-lg"}>
                  {item.submenu.map((subItem) => (
                    <li key={subItem.label}>
                      <a href={subItem.href} className={isMobile ? 'block py-2 px-3 text-slate-800 rounded hover:bg-slate-100' : 'block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-teal-600'}>
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <a href={item.href} className={linkClass}>
            {item.label}
          </a>
        )}
      </li>
    ));
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-slate-200/80 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-poppins font-bold text-xl text-slate-800">InvestSnips</span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {renderNavLinks(NAV_ITEMS)}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderNavLinks(NAV_ITEMS, true)}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
