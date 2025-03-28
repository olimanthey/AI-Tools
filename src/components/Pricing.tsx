import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Brain, Users, ArrowRight, CheckCircle, Target, Sparkles, Lightbulb, CreditCard } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'individual' | 'organization'>('individual');

  const scrollToSection = (href: string, tab?: string) => {
    const element = document.querySelector(href);
    if (element) {
      if (tab) {
        const coursesTabButtons = document.querySelectorAll('[data-tab]');
        coursesTabButtons.forEach((button) => {
          if (button instanceof HTMLElement && button.dataset.tab === tab) {
            button.click();
          }
        });
      }
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, tab ? 100 : 0);
    }
  };

  const individualPlans: PricingPlan[] = [
    {
      title: "Single Course",
      price: "99 CHF",
      description: "Perfect for getting started with AI learning",
      features: [
        "Access to one selected course",
        "3 months course access",
        "Course materials and resources",
        "Community access",
        "Certificate of completion"
      ],
      buttonText: "Choose Course"
    }
  ];

  const organizationPlans: PricingPlan[] = [
    {
      title: "Team Course",
      price: "99 CHF",
      description: "Perfect for small teams up to 10 employees",
      features: [
        "Access for up to 10 employees",
        "One selected course",
        "3 months course access",
        "Team progress tracking",
        "Dedicated support"
      ],
      buttonText: "Select Course"
    }
  ];

  const paymentMethods = [
    {
      name: 'MasterCard',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="8" cy="12" r="3" fill="currentColor"/>
        <circle cx="16" cy="12" r="3" fill="currentColor" opacity="0.5"/>
      </svg>
    },
    {
      name: 'Visa',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 9h20v6H2z"/>
        <path d="M4 15l2-6m4 6l2-6m4 6l2-6"/>
      </svg>
    },
    {
      name: 'PayPal',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9h12a4 4 0 0 0 0-8H6v12h2v4"/>
        <path d="M9 17h12a4 4 0 0 0 0-8H9"/>
      </svg>
    },
    {
      name: 'TWINT',
      icon: <div className="text-xl font-bold">TWINT</div>
    },
    {
      name: 'Apple Pay',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4a4 4 0 0 1 4 4v12H8V8a4 4 0 0 1 4-4z"/>
        <path d="M8 8h8"/>
      </svg>
    },
    {
      name: 'Google Pay',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h18"/>
        <path d="M12 3v18"/>
        <circle cx="12" cy="12" r="9"/>
      </svg>
    }
  ];

  function PricingCard({ plan, planType }: { plan: PricingPlan; planType: 'individual' | 'organization' }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
      scrollToSection('#courses', planType);
    };

    return (
      <div className="card bg-base-200 hover:shadow-xl transition-all duration-300">
        <div className="card-body p-6">
          {/* Plan Header */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="badge badge-primary badge-lg">{plan.price}</div>
            </div>
          </div>

          {/* Plan Description */}
          <p className="text-base-content/70 mt-4">{plan.description}</p>

          {/* Key Features */}
          <div className="grid grid-cols-1 gap-2 mt-4">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-base-content/80">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={handleButtonClick}
            className="btn btn-primary w-full mt-6 gap-2"
          >
            {plan.buttonText}
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Expanded Content */}
          <div className={`mt-6 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
            <div className="pt-6 border-t border-base-300 space-y-6">
              {/* Plan Benefits */}
              <div className="bg-base-100 rounded-xl p-6">
                <h4 className="flex items-center gap-2 text-lg font-bold mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  Key Benefits
                </h4>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-medium">1</span>
                    </div>
                    <p className="text-base-content/70">Flexible learning schedule to fit your needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-medium">2</span>
                    </div>
                    <p className="text-base-content/70">Expert-led instruction and support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-medium">3</span>
                    </div>
                    <p className="text-base-content/70">Practical, hands-on learning experience</p>
                  </div>
                </div>
              </div>

              {/* Plan Highlights */}
              <div className="bg-base-100 rounded-xl p-6">
                <h4 className="flex items-center gap-2 text-lg font-bold mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Plan Highlights
                </h4>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-base-content/70">Comprehensive course materials and resources</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-base-content/70">Interactive learning environment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-base-content/70">Industry-recognized certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Details Button */}
          <button
            className="btn btn-ghost gap-2 mt-6 w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="w-5 h-5" /></>
            ) : (
              <>View Plan Details <ChevronDown className="w-5 h-5" /></>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="pricing" className="py-20 bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Flexible Pricing Plans</h2>
          <p className="text-xl text-base-content/70 mb-8">
            Choose the perfect plan for your AI learning journey
          </p>

          {/* Tab Switcher */}
          <div className="tabs tabs-boxed bg-base-300/50 p-1 inline-flex gap-1">
            <button
              className={`tab ${activeTab === 'individual' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('individual')}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              For Individuals
            </button>
            <button
              className={`tab ${activeTab === 'organization' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('organization')}
            >
              <Users className="w-5 h-5 mr-2" />
              For Organizations
            </button>
          </div>
        </div>

        <div className="px-4">
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {activeTab === 'individual'
              ? individualPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} planType="individual" />
                ))
              : organizationPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} planType="organization" />
                ))}
          </div>

          {/* Payment Methods Section */}
          <div className="mt-16 bg-base-100 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Accepted Payment Methods</h3>
              </div>
              <p className="text-base-content/70">
                Choose your preferred payment method for a secure checkout
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-base-200 rounded-xl p-4 aspect-square hover:bg-base-300 transition-colors"
                >
                  <div className="text-primary mb-2">
                    {method.icon}
                  </div>
                  <span className="text-sm font-medium">{method.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-8 text-base-content/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>256-bit SSL Encryption</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}