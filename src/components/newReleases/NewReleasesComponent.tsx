import React from 'react';
import './NewReleasesComponent.css';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Interfaz para la estructura de una nueva publicación
interface NewRelease {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

// Función para obtener la nueva publicación desde la API
const fetchNewRelease = async (): Promise<NewRelease> => {
  const response = await fetch('https://api.jsonbin.io/v3/b/672cf061e41b4d34e4504258');
  const data = await response.json();
  return data.record; // Devuelve el contenido dentro de "record"
};

const NewReleasesComponent: React.FC = () => {
  const { data: newRelease, isLoading } = useQuery({
    queryKey: ['newRelease'],
    queryFn: fetchNewRelease,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  if (isLoading) {
    return (
      <div className="text-center">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="new-release-detail">
      {/* Imagen de la nueva publicación */}
      <div className="new-release-image">
        <img
          src={newRelease?.image}
          alt="New Release"
          className="image"
        />
      </div>

      {/* Contenido de la nueva publicación */}
      <div className="new-release-content">
        <h1 className="new-release-title">{newRelease?.title}</h1>
        <h2 className="new-release-subtitle">{newRelease?.subtitle}</h2>
        <p className="new-release-description">{newRelease?.description}</p>
      </div>
    </div>
  );
};

export default NewReleasesComponent;
