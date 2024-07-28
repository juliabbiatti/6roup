import React from 'react'
import fondo2 from "../../assets/images/fondo2.jpg";

function Contact() {
  return (
    <div  style={{
      backgroundImage: `url(${fondo2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "70vh",
      color: "white",
    }}>Contact</div>
  )
}

export default Contact;