import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/:id" element={<ServicePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
