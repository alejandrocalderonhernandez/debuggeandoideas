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
  const response = await fetch('https://api.jsonbin.io/v3/b/672cf03de41b4d34e4504240');
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
    <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    return <p>Cargando...</p>;
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
        <textarea 
          className="notice-text-area"
          defaultValue={notice?.content}
          readOnly
        />
      </div>
    </div>
  );
};

export default NoticesComponent;
