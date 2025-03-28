import React from 'react';
import { Sparkles, GraduationCap, Users2, Target } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Comprehensive AI Education",
      description: "From automation to decision-making, our courses cover the full spectrum of modern AI applications for both individuals and organizations."
    },
    {
      icon: <Users2 className="w-12 h-12" />,
      title: "Tailored Learning Experience",
      description: "Choose from specialized tracks for personal development or organizational transformation, with flexible course bundles and custom enterprise solutions."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Industry-Focused Results",
      description: "Learn practical AI skills directly applicable to your career or business, with real-world projects and hands-on experience."
    }
  ];

  return (
    <section id="features" className="py-20 bg-base-200">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
            Platform Features
          </h2>
          <p className="text-xl text-base-content/70">
            Discover how our AI Masterclass platform delivers exceptional learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}