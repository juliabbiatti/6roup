import React from "react";
import fondo1 from "../../assets/images/fondo1.jpg";
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        color: "white",
      }}
    >
      Home
    </div>
  );
}

export default Home;
