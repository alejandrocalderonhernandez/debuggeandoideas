import NavBarComponent from './components/navbar/NavBarComponent';
import FooterComponent from './components/footer/FooterComponent';

import ContainerCourseCardsContainer from './components/containerCards/ContainerCourseCardsComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

function App() {
  return (
    <>
      <NavBarComponent />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {/* Aquí va el contenido principal de la página */}

        <br />
        <br />
      <ContainerCourseCardsContainer/>
      </main>
      <FooterComponent />
    </>
  );
}
export default App
