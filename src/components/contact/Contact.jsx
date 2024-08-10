import Formulario from "../formulario/formulario";
import LocationMap from "../location/LocationMap";
import fondo2 from "../../assets/images/fondo2.jpg";
import Redes from "../redes/Redes";
import "./Contact.css";
function Contact() {
  return (
    <div style={{
      backgroundImage: `url(${fondo2})`,
      backgroundSize:"cover",
      height:"70vh",
      display:"flex",
      
    }} className="bg-gray">
      <Redes />

      <Formulario />

      <LocationMap />
    </div>
  );
}
export default Contact;
