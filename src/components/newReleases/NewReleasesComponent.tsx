import React, { useEffect, useState } from 'react';
import './NewReleasesComponent.css';

// Interfaz para la estructura de una nueva publicación
interface NewRelease {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const NewReleasesComponent: React.FC = () => {
  const [newRelease, setNewRelease] = useState<NewRelease | null>(null);

  useEffect(() => {
    // Cargar los datos desde el archivo JSON en la carpeta public
    fetch('/newReleases.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setNewRelease(data))
      .catch(error => console.error('Error al cargar el JSON:', error));
  }, []);

  if (!newRelease) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="new-release-detail">
      {/* Imagen de la nueva publicación */}
      <div className="new-release-image">
        <img
          src={newRelease.image}
          alt="New Release"
          className="image"
        />
      </div>

      {/* Contenido de la nueva publicación */}
      <div className="new-release-content">
        <h1 className="new-release-title">{newRelease.title}</h1>
        <h2 className="new-release-subtitle">{newRelease.subtitle}</h2>
        <p className="new-release-description">{newRelease.description}</p>
      </div>
    </div>
  );
};

export default NewReleasesComponent;
