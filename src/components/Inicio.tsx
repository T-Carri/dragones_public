import '../assets/style/Inicio.css';
import wa from '../assets/img/WhatsApp_icon.png';

const Inicio = () => {
  return (
    <section className="dragones_inicio">
      <span className="letters_inicio">Dragones <span style={{color:'#B80000'}}>taek</span><span style={{color:'blue'}}>wondo</span> <span style={{color:'green'}}>UTFV</span> </span>
      
      {/* Icono de WhatsApp */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp_icon">
        <img src={wa} alt="WhatsApp" />
      </a>
    </section>
  );
};

export default Inicio;