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
  
  // State for inView to trigger animations
  const [inView, setInView] = useState(false);

  // Reference for the component
  const formRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver to trigger animation when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

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

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Event handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success handling
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="py-16 my-[100px] px-4 md:px-8 lg:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Animation trigger when in view
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ y: -100 }}
        animate={{ y: inView ? 0 : -100 }} // Slide-in animation
        transition={{ duration: 1 }}
        ref={formRef} // Assign ref to the form section
      >
        <motion.h2
          className="text-5xl ff font-bold text-center mb-12"
          style={{ color: colors.primary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 1 }}
        >
          Contact us
        </motion.h2>

        <motion.div
          className="bg-white shadow-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }} // Fade-in for form container
          transition={{ duration: 1, delay: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className={`w-full px-4 py-3 bg-gray-100 border pr-10 transition-all duration-300 
                    ${errors.firstName ? 'border-red-500' : 'border-gray-200'}
                    focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none`}
                />
                <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {errors.firstName && (
                  <p className="mt-1 text-black text-sm text-red-500">{errors.firstName}</p>
                )}
              </motion.div>
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <motion.div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Mail Address*"
                  className={`w-full px-4 py-3  bg-gray-100  rounded-md border pr-10 transition-all duration-300
                    ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                />
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </motion.div>

              {/* Phone Number */}
              <motion.div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className={`w-full px-4 py-3 rounded-md  bg-gray-100  border pr-10 transition-all duration-300 
                    ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                />
                <FaPhoneAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </motion.div>
              </div>

              {/* Message */}
              <motion.div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  className={`w-full px-4 py-3 rounded-md  bg-gray-100  border pr-10 h-40 transition-all duration-300 
                    ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                />
                <FaComment className="absolute right-3 top-4 text-gray-400" />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </motion.div>

           

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 
                  hover:bg-orange-600 disabled:bg-gray-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
