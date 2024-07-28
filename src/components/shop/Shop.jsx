import React from 'react'
import fondo3 from "../../assets/images/fondo3.jpg";

function Shop() {
  return (
    <div  style={{
      backgroundImage: `url(${fondo3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "70vh",
      color: "white",
    }}>Shop</div>
  )
}

export default Shop;