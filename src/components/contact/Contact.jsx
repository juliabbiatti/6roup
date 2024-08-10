import Formulario from "../formulario/formulario";
import LocationMap from "../location/LocationMap";
import Fondo2 from "../../assets/images/Fondo2.jpg";
import Redes from "../redes/Redes";
import "./Contact.css";
function Contact() {
  return (
    <div style={{
      backgroundImage: `url(${Fondo2})`,
      backgroundSize:"cover",
      height:"100vh",
      display:"flex",
      
    }} className="bg-gray">
      <Redes />

      <Formulario />

      <LocationMap />
    </div>
  );
}
export default Contact;
