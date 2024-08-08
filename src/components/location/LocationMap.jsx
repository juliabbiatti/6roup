import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  return (
    <div className="location-map">
      <h4>Ubicación</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6569.671710354984!2d-58.436938112391125!3d-34.58301970039313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sPalermo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723073772263!5m2!1ses!2sar"
        width="450"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      ></iframe>


    </div>
  );
};

export default LocationMap;
