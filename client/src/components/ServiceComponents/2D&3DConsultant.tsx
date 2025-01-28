import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ArchitecturalServices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false); // Close the modal after submission
  };

  const services: ServiceFeature[] = [
    {
      icon: require('../../utils/ServicesImages/7.png'),
      title: "Floor plans and layouts",
      
    },
    {
      icon: require('../../utils/ServicesImages/9.png'),
      title: "3D rendering and walkthroughs",
      
    },
    {
      icon: require('../../utils/ServicesImages/8.png'),
      title: "Customized designs to match your vision",
      
    }
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-3xl md:text-5xl ff font-bold text-[#1B2D3C] mb-4">
            Architectural 2D & 3D Consultant Services
          </h1>
          <p className="text-gray-600 text-lg">
            Visualize your dreams before they come to life.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={require("../../utils/ServicesImages/3.png")}
                alt="3D Architectural Model"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="space-y-6 p-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Our architectural consulting services provide detailed 2D drawings and stunning 3D
              visualizations, helping you see the final product before construction begins.
            </motion.p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1B2D3C] text-white px-6 py-3  hover:bg-[#2a4459] transition-colors duration-300"
            >
              Enquire now
            </button>
          </div>
        </div>

         {/* Services Include Section */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.7 }}
         >
           <h2 className="text-2xl font-bold text-[#1B2D3C] mb-12 text-center">
             Services Include
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {services.map((service, index) => (
               <motion.div
                 key={index}
                 className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                 whileHover={{ scale: 1.05 }}
               >
                 <div className="flex justify-center">
                  <img  className="h-16" src={service.icon}/>
                  </div>
                  
                 <h3 className="font-semibold text-gray-400  px-20 mb-2">
                   {service.title}
                 </h3>
                
               </motion.div>
             ))}
           </div>
         </motion.div>

      

        {/* Modal */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-[#1B2D3C] mb-6">Request a Consultation</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                  required
                />
                <textarea
                  name="projectDetails"
                  placeholder="Project Details"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                  rows={4}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ArchitecturalServices;
