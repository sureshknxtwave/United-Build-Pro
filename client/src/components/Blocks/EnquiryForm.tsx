// src/pages/ConcreteBlocks/EnquiryForm.tsx
import React, { useState } from 'react';

interface EnquiryFormProps {
  selectedBlock: string;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ selectedBlock, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1B2D3C]">Enquiry Form</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Mail Address*"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
              required
            />
          </div>

          <textarea
            placeholder="Enter Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300"
          >
            Submit Request →
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;