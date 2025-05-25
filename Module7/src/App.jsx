import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';

const FormPage = lazy(() => import('./pages/FormPage'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="container mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
