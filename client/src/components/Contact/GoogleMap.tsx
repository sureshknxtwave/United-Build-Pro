import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-[650px] my-10 flex justify-center items-center">
      <iframe
        title="Google Map Location"
        className="w-[90%] h-full rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.9913060205764!2d77.55257687680683!3d13.000884111935021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8028c8d9e3%3A0x84ea49a9e02d2e59!2sDr%20Rajkumar%20Rd%2C%20Subramanya%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560010!5e0!3m2!1sen!2sin!4v1706749271847!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
