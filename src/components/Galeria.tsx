import { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/style/Galeria.css';

interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
  postDate: string;
}

const Galeria = () => {
  // Estado para almacenar las imágenes
  const [images, setImages] = useState<Image[]>([]);
  // Estado para manejar el loading
  const [loading, setLoading] = useState(true);

   // Estado para la imagen seleccionada
   const [selectedImage, setSelectedImage] = useState<Image | null>(null);
   // Estado para manejar la visibilidad del modal
   const [modalOpen, setModalOpen] = useState(false);

  // Efecto para obtener las imágenes cuando el componente se monta
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Hacer la solicitud a la API
        const response = await axios.get('https://heroic-torrone-6e5f03.netlify.app/.netlify/functions/api/api/gallery/');
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


  // Manejar la apertura del modal
  const openModal = (image: Image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Manejar el cierre del modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Mientras se cargan los datos, mostrar un mensaje de loading
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='gallery-container'>
      <div className='card-grid'>
        {images.map((image) => (
          <div key={image.id} className='card' onClick={() => openModal(image)}>
            <img 
              src={image.url} 
              alt={image.title} 
              className='card-image' 
            />
             <div className='card-content'>
              <h3 className='card-title'>{image.title}</h3>
              <p className='card-description'>{image.description}</p>
            </div> 
          </div>
        ))}
      </div>

       {/* Modal */}
       {modalOpen && selectedImage && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={closeModal}>×</button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className='modal-image'
            />
            <h5 className='modal-title'>{selectedImage.title}</h5>
            <p className='modal-description'>{selectedImage.description}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Galeria;
