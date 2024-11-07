import React, { useEffect, useState } from 'react';
import './NoticesComponent.css';

// Interfaz para la estructura de un aviso
interface Notice {
  title: string;
  image: string;
  content: string;
}

const NoticesComponent: React.FC = () => {
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    // Cargar los datos desde el archivo JSON en la carpeta public
    fetch('http://localhost:5173/notices.json')
      .then(response => {
        console.log('entre')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setNotice(data))
      .catch(error => console.error('Error al cargar el JSON:', error));
  }, []);

  if (!notice) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="notice-detail">
      {/* Imagen del aviso */}
      <div className="notice-image">
        <img
          src={notice.image}
          alt="Notice"
          className="image"
        />
      </div>
      
      {/* Contenido del aviso */}
      <div className="notice-content">
        <h1 className="notice-title">{notice.title}</h1>
        <textarea 
          className="notice-text-area"
          defaultValue={notice.content}
          readOnly
        />
      </div>
    </div>
  );
};

export default NoticesComponent;