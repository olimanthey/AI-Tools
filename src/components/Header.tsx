import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-base-100/95 backdrop-blur-sm z-50 border-b border-base-300">
      <div className="container mx-auto max-w-6xl">
        <div className="navbar px-4">
          <div className="navbar-start">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span>AI Masterclass</span>
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end hidden lg:flex">
            <a href="#courses" className="btn btn-primary btn-lg" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#courses');
            }}>
              View Courses
            </a>
          </div>

          <div className="lg:hidden flex items-center ml-auto">
            <div className="dropdown dropdown-end">
              <button
                className="btn btn-ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <ul className={`
                menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-base-200 rounded-box w-64
                ${isMenuOpen ? 'block' : 'hidden'}
              `}>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <div className="pt-4">
                  <a
                    href="#courses"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#courses');
                    }}
                  >
                    View Courses
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}