import React from 'react';
import { Brain, Users } from 'lucide-react';
import PricingCard from './PricingCard';
import { PricingPlan } from './types';

interface PricingPlansProps {
  individualPlans: PricingPlan[];
  organizationPlans: PricingPlan[];
  onPlanSelect: () => void;
}

export default function PricingPlans({ individualPlans, organizationPlans, onPlanSelect }: PricingPlansProps) {
  return (
    <>
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold">For Individuals</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {individualPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} onSelect={onPlanSelect} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold">For Organizations</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organizationPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} onSelect={onPlanSelect} />
          ))}
        </div>
      </div>
    </>
  );
}