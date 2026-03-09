'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    boatType: '',
    boatSize: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          boatType: '',
          boatSize: '',
          details: '',
        });
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-light bg-white rounded-t-xl">
          <h2 className="text-2xl font-bold text-navy">Get Your Free Quote</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-light rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-navy" />
          </button>
        </div>

        {/* Form Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border-gray-light focus:border-orange focus:ring-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Email *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-gray-light focus:border-orange focus:ring-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(561) 404-0669"
                required
                className="border-gray-light focus:border-orange focus:ring-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Boat Type
              </label>
              <select
                name="boatType"
                value={formData.boatType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-light rounded-lg focus:border-orange focus:ring-orange bg-white text-navy"
              >
                <option value="">Select boat type...</option>
                <option value="sailboat">Sailboat</option>
                <option value="motorboat">Motor Boat</option>
                <option value="yacht">Yacht</option>
                <option value="jet-ski">Jet Ski</option>
                <option value="sunken">Sunken/Damaged</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Estimated Boat Size
              </label>
              <select
                name="boatSize"
                value={formData.boatSize}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-light rounded-lg focus:border-orange focus:ring-orange bg-white text-navy"
              >
                <option value="">Select size range...</option>
                <option value="under-15">Under 15 feet</option>
                <option value="15-25">15-25 feet</option>
                <option value="25-35">25-35 feet</option>
                <option value="35-50">35-50 feet</option>
                <option value="over-50">Over 50 feet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Additional Details
              </label>
              <Textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Describe the boat condition, location, and any specific requirements..."
                className="resize-none border-gray-light focus:border-orange focus:ring-orange"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-3 rounded-lg transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
            </Button>

            <p className="text-xs text-gray-body text-center">
              We'll respond within 1 hour during business hours.
            </p>
          </form>
        ) : (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy">Quote Request Sent!</h3>
            <p className="text-gray-body">
              Thank you! We'll contact you shortly to confirm your boat removal details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
