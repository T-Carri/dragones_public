import  { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/style/Eventos.css'
import wa from '../assets/img/WhatsApp_icon.png';
interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
  postDate: string;
}

const Eventos = () => {
  // Estado para almacenar las imágenes
  const [images, setImages] = useState<Image[]>([]);
  // Estado para manejar el loading
  const [loading, setLoading] = useState(true);

  // Efecto para obtener las imágenes cuando el componente se monta
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Hacer la solicitud a la API
        const response = await axios.get('https://heroic-torrone-6e5f03.netlify.app/.netlify/functions/api/api/eventos/');
        // Actualizar el estado con los datos obtenidos
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Mientras se cargan los datos, mostrar un mensaje de loading
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='d-flex  justify-content-center align-items-center' style={{height: '100vh',   padding: '20px'}}>
      <div className='contendor__imagenes__eventos ' style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '10px',
       
      }}>
        {images.map((image, index) => (
          <div key={index} style={{ border: '2px solid white' }}>
            <img 
              src={image.url} 
              alt={`Event ${index}`} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
        ))}
      </div>

      <a href="https://wa.me/5611509866" target="_blank" rel="noopener noreferrer" className="whatsapp_icon">
        <img src={wa} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Eventos;