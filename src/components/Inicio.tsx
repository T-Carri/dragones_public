import '../assets/style/Inicio.css';
import wa from '../assets/img/WhatsApp_icon.png';
import bandera from '../assets/img/bandera.png'
const Inicio = () => {
  return (
    <section className="dragones_inicio">
      <span className="letters_inicio">Dragones <span /* tyle={{color:'#B80000'}} */>taek</span><span /* style={{color:'blue'}} */>wondo</span> <span /* style={{color:'green'}} */>UTFV</span> </span>
      
      {/* Icono de WhatsApp */}
      <a href="https://wa.me/5611509866" target="_blank" rel="noopener noreferrer" className="whatsapp_icon">
        <img src={wa} alt="WhatsApp" />
      </a>


      <div className='bandera_inicio'>
<img src={bandera} alt="mx" width={150} />

      </div>
    </section>
  );
};

export default Inicio;