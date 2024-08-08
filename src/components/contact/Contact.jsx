import Formulario from "../formulario/formulario";
import LocationMap from "../location/LocationMap";
import Redes from "../redes/Redes";
import "./Contact.css";
function Contact() {
  return (
    <div className="bg-gray">
      <Redes />

      <Formulario />

      <LocationMap />
    </div>
  );
}
export default Contact;
