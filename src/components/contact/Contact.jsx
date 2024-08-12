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
      display:"flex",
      
    }} className="bg-gray">
    <div>  <Redes /></div>

     <div> <Formulario /></div>

     <div><LocationMap /></div>
    </div>
  );
}
export default Contact;
