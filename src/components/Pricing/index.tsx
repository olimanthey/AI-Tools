import React, { useState } from 'react';
import PricingPlans from './PricingPlans';
import EnterprisePlan from './EnterprisePlan';
import { PricingPlan } from './types';

export default function Pricing() {
  const [showEnterprise, setShowEnterprise] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = () => {
    scrollToSection('#contact');
  };

  const handleEnterpriseToggle = () => {
    setShowEnterprise(!showEnterprise);
    if (!showEnterprise) {
      scrollToSection('#contact');
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
    },
    {
      title: "Complete Bundle",
      price: "249 CHF",
      description: "Best value for full AI mastery",
      features: [
        "Access to all 3 courses",
        "6 months course access",
        "All course materials",
        "Priority community access",
        "Save 48 CHF",
        "Extended support"
      ],
      buttonText: "Get Bundle",
      popular: true
    }
  ];

  const organizationPlans: PricingPlan[] = [
    {
      title: "Team Course",
      price: "299 CHF",
      description: "Perfect for small teams up to 10 employees",
      features: [
        "Access for up to 10 employees",
        "One selected course",
        "3 months course access",
        "Team progress tracking",
        "Dedicated support"
      ],
      buttonText: "Select Course"
    },
    {
      title: "Corporate Package",
      price: "799 CHF",
      description: "Complete solution for your organization",
      features: [
        "Access to all 3 courses",
        "Up to 10 employees per course",
        "6 months course access",
        "Save 98 CHF",
        "Advanced analytics",
        "Priority support"
      ],
      buttonText: "Get Package",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-base-200">
      <div className="flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Flexible Pricing Plans</h2>
          <p className="text-xl text-base-content/70">
            Choose the perfect plan for your AI learning journey
          </p>
        </div>

        <div className="w-full px-4">
          <PricingPlans
            individualPlans={individualPlans}
            organizationPlans={organizationPlans}
            onPlanSelect={handlePlanSelect}
          />

          <div className="max-w-4xl mx-auto">
            <EnterprisePlan
              showDetails={showEnterprise}
              onToggle={handleEnterpriseToggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}