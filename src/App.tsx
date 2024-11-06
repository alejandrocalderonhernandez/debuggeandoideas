import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/navbar/NavBarComponent';
import FooterComponent from './components/footer/FooterComponent';
import ContainerCourseCardsContainer from './components/containerCards/ContainerCourseCardsComponent';
import CourseDetailComponent from './components/courseDetail/CourseDetailComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

function App() {
  return (
    <Router>
      <NavBarComponent />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ContainerCourseCardsContainer />} />
          <Route path="/course/:id" element={<CourseDetailComponent />} />
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
}

export default App;
