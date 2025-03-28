import React, { useEffect, useState } from 'react';
import { ArrowRight, Brain, Sparkles, Trophy, Users } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=2000"
          alt="Cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-base-300/95 via-base-300/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-base-300/95 via-base-300/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary backdrop-blur-sm border border-primary/20 mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Shape the Future of AI</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Artificial Intelligence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Masterclass
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-xl md:text-2xl text-base-content/70 leading-relaxed mb-8 max-w-3xl">
              Exponential Opportunities. Existential Risks.
              <span className="block">Master the AI-Driven Future.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <button 
              onClick={() => scrollToSection('#courses')}
              className="btn btn-primary btn-lg gap-2 min-w-[200px]"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="btn btn-outline btn-lg min-w-[200px] backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>

          {/* Feature Cards */}
          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="card bg-base-200/50 backdrop-blur-sm border border-base-content/10">
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <Brain className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-2xl">500+</p>
                    <p className="text-base-content/70">AI Projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200/50 backdrop-blur-sm border border-base-content/10">
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-2xl">98%</p>
                    <p className="text-base-content/70">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200/50 backdrop-blur-sm border border-base-content/10">
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-2xl">15+ Years</p>
                    <p className="text-base-content/70">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}