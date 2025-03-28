import React from 'react';
import { GraduationCap, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-base-200 pt-20 pb-10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span>AI Masterclass</span>
            </a>
            <p className="text-base-content/70">
              Empowering the next generation of AI practitioners through expert-led education.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#courses')}
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#pricing')}
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#faq')}
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected with AI</h3>
            <p className="text-base-content/70 mb-4">
              Stay up to date with the latest AI news and developments
            </p>
            <a 
              href="https://www.bbc.com/news/topics/ce1qrvleleqt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors"
            >
              <Globe className="w-6 h-6" />
              <span>Latest AI News</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Terms & Agreements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Refund Policy</h4>
                <p className="text-sm text-base-content/70">
                  Full refund available within 7 days of purchase, no questions asked.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Data Privacy</h4>
                <p className="text-sm text-base-content/70">
                  We protect your data and course materials from unauthorized distribution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/70 text-sm">
              © 2025 AI Masterclass. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}