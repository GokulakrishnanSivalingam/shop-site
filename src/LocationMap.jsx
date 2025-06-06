import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  return (
    <div className='map-container'>
      <iframe
        title="Siva Electricals Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.03621777448598!2d79.36728296579858!3d11.86468093879867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab555a2129cfb1%3A0x64430502db67e9ca!2sSiva%20Electricals!5e0!3m2!1sen!2sin!4v1749169352210!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
