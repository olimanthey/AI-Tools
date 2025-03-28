import React from 'react';
import { Check, PhoneCall } from 'lucide-react';

interface EnterprisePlanProps {
  showDetails: boolean;
  onToggle: () => void;
}

export default function EnterprisePlan({ showDetails, onToggle }: EnterprisePlanProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Enterprise Plan</h3>
            <p className="text-base-content/70">
              Custom solutions for large organizations with specialized needs
            </p>
            {showDetails && (
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Custom number of employees</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Flexible installment options</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Custom course customization</span>
                </li>
              </ul>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <button 
              className="btn btn-primary btn-lg gap-2"
              onClick={onToggle}
            >
              <PhoneCall className="w-5 h-5" />
              Book a Call
            </button>
            <span className="text-sm text-center text-base-content/70">
              Custom pricing & plans
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}