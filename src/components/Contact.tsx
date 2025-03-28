import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
  status: string;
  formType: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: '',
    message: '',
    status: 'Todo',
    formType: 'Contact'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://hook.eu2.make.com/wpftovtdbwatnx6phrw3odvhgg6s1w8u', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const responseText = await response.text();
      console.log('Response status:', response.status);
      console.log('Response body:', responseText);

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          inquiryType: '',
          message: '',
          status: 'Todo',
          formType: 'Contact'
        });

        setTimeout(() => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-base-200 scroll-mt-24">
      <div className="flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Contact Us</h2>
          </div>
          <p className="text-xl text-base-content/70">
            Have questions? We're here to help you on your AI learning journey
          </p>
        </div>

        <div className="w-full max-w-2xl px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="w-16 h-16 text-success mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-base-content/70">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="alert alert-error">
                      <p>{error}</p>
                    </div>
                  )}

                  <input type="hidden" name="status" value="Todo" />
                  <input type="hidden" name="formType" value="Contact" />

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Type of Inquiry</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="course">Course-related question</option>
                      <option value="enrollment">Enrollment assistance</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className="textarea textarea-bordered h-32"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}