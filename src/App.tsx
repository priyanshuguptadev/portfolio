import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { AnimatePresence } from 'motion/react';

// Wrapper to access location for AnimatePresence if we wanted page transitions
// For now, simple routing
const AppContent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <footer className="mt-24 pt-12 border-t border-neutral-800 text-center text-neutral-600 text-xs pb-12">
        <p>&copy; {new Date().getFullYear()}. Crafted with simplicity.</p>
      </footer>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
