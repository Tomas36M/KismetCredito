// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import FormPage from './views/FormPage/FormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/formulario" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;