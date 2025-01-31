import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser, FaComment } from 'react-icons/fa'; // Import the icons
import { motion } from 'framer-motion'; // Import framer-motion

interface ContactFormData {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

interface ValidationErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  // Colors
  const colors = {
    primary: '#1B2D3C',
    orange: '#FF6600',
    white: '#FFFFFF',
    gray: {
      light: '#F5F5F5',
      text: '#666666',
      border: '#E5E5E5',
    },
  };

  // States
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Event handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ firstName: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section className="py-16 my-[10px] px-4 md:px-8 lg:px-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl ff font-bold text-center mb-12" style={{ color: colors.primary }}>
          Contact us
        </h2>

        <div className="bg-white shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className={`w-full px-4 py-3 bg-gray-100 border pr-10 transition-all duration-300 
                  ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
              />
              <FaUser className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-400" />
              {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Mail Address*"
                  className={`w-full px-4 py-3 bg-gray-100 border pr-10 transition-all duration-300 
                    ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                />
                <FaEnvelope className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-400" />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className={`w-full px-4 py-3 bg-gray-100 border pr-10 transition-all duration-300 
                    ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                />
                <FaPhoneAlt className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-400" />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message*"
                className={`w-full px-4 py-3 bg-gray-100 border pr-10 h-40 transition-all duration-300 
                  ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
              />
              <FaComment className="absolute right-3 top-4 text-gray-400" />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <div className="flex justify-start">
              <button type="submit" disabled={isSubmitting} className="bg-orange-500 text-white px-6 py-3 rounded-md">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;