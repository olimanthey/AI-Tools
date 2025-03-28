import React, { useState } from 'react';
import { X } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  onSubmit: (data: { name: string; email: string; courseType: string }) => void;
}

interface FormData {
  name: string;
  email: string;
  courseType: string;
  status: string;
  submissionDate: string;
}

export default function EnrollmentModal({ isOpen, onClose, courseTitle }: EnrollmentModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      courseType: courseTitle,
      status: 'Todo',
      submissionDate: new Date().toISOString()
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/fdb7s7tdyi028fw5bbjgghykcu4ln5a9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const responseText = await response.text();
      console.log('Response status:', response.status);
      console.log('Response body:', responseText);

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(`Submission failed: ${response.status} ${responseText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-6 border-b border-base-300">
          <h3 className="text-xl font-bold">Enroll in Course</h3>
          <button 
            onClick={onClose}
            className="btn btn-ghost btn-sm p-0 hover:bg-transparent"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-6 text-center">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="text-success mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-base-content/70">
                Your enrollment request has been received. We'll contact you shortly with next steps.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="alert alert-error">
                <p>{error}</p>
              </div>
            )}

            <input type="hidden" name="status" value="Todo" />
            <input type="hidden" name="submissionDate" value={new Date().toISOString()} />

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Selected Course</span>
              </label>
              <input
                type="text"
                value={courseTitle}
                readOnly
                className="input input-bordered w-full bg-base-200"
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  'Submit Enrollment'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}