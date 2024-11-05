import NavBarComponent from './components/navbar/NavBarComponent';
import FooterComponent from './components/footer/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

function App() {
  return (
    <>
      <NavBarComponent />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {/* Aquí va el contenido principal de la página */}
  
    
      </main>
      <FooterComponent />
    </>
  );
}
export default App
