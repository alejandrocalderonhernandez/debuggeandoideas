import React from 'react';
import './NoticesComponent.css';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Interfaz para la estructura de un aviso
interface Notice {
  title: string;
  image: string;
  content: string;
}

// Función para obtener el aviso desde la API
const fetchNotice = async (): Promise<Notice> => {
  const response = await fetch('https://api.jsonbin.io/v3/b/67fc43ad8561e97a50fedea6');
  const data = await response.json();
  return data.record; // Devuelve el contenido dentro de "record"
};

const NoticesComponent: React.FC = () => {
  const { data: notice, isLoading } = useQuery({
    queryKey: ['notice'],
    queryFn: fetchNotice,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  if (isLoading) {
    return (
      <div className="loading-container">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" className="loading-spinner" />
        <p>Cargando aviso...</p>
      </div>
    );
  }

  return (
    <div className="notice-detail">
      {/* Imagen del aviso */}
      <div className="notice-image">
        <img
          src={notice?.image}
          alt="Notice"
          className="image"
        />
      </div>
      
      {/* Contenido del aviso */}
      <div className="notice-content">
        <h1 className="notice-title">{notice?.title}</h1>
        <div className="notice-content-display">
          {notice?.content?.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticesComponent;