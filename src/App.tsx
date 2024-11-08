import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/navbar/NavBarComponent';
import FooterComponent from './components/footer/FooterComponent';
import ContainerCourseCardsContainer from './components/containerCards/ContainerCourseCardsComponent';
import CourseDetailComponent from './components/courseDetail/CourseDetailComponent';
import NoticesComponent from './components/noticesComponent/NoticesComponent';
import NewReleasesComponent from './components/newReleases/NewReleasesComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router basename="/">
        <NavBarComponent />
        <main className="main-content" style={{ paddingTop: '60px' }}>
          <Routes>
            <Route path="/" element={<ContainerCourseCardsContainer />} />
            <Route path="/course/:id" element={<CourseDetailComponent />} />
            <Route path="/notices/" element={<NoticesComponent />} />
            <Route path="/upcoming/" element={<NewReleasesComponent />} />
            <Route path="*" element={<ContainerCourseCardsContainer />} />
          </Routes>
        </main>
        <FooterComponent />
      </Router>
    </div>
  );
};

export default App;
