import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Inicio from './components/Inicio';
import Eventos from './components/Eventos';
import Noticias from './components/Noticias';
import Organigrama from './components/Organigrama';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Welcome />}>
        
          <Route index element={<Inicio />} />
      
          <Route path="eventos" element={<Eventos/>} />
          <Route path="galeria" element={<Galeria/>} />

          <Route path="noticias" element={<Noticias/>} />
          <Route path="eventos" element={<Eventos/>} />
          <Route path="organigrama" element={<Organigrama/>} />
          <Route path="contacto" element={<Contacto/>} />

          
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;