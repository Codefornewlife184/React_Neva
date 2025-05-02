import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="map-box">
        <iframe 
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.169417925018!2d29.08441407649837!3d40.18304296982841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f15bd793a03%3A0x466cd7c276ecdd79!2sAven%20mobilya!5e0!3m2!1str!2str!4v1745881693906!5m2!1str!2str"
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex="0"
          title="Neva MobİLYA Konum"
        />
      </div>
    </>
  );
};

export default ContactMap;
