import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  onSelect: () => void;
}

export default function PricingCard({ plan, onSelect }: PricingCardProps) {
  return (
    <div className={`card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-2 border-primary' : ''}`}>
      <div className="card-body p-8">
        {plan.popular && (
          <div className="badge badge-primary absolute right-4 top-4">Most Popular</div>
        )}
        <h3 className="card-title text-2xl mb-2">{plan.title}</h3>
        <p className="text-base-content/70 mb-4">{plan.description}</p>
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-4xl font-bold">{plan.price}</span>
          {!plan.price.includes('Custom') && <span className="text-base-content/70">per package</span>}
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={onSelect}
          className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-lg w-full`}
        >
          {plan.buttonText}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}