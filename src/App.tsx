import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

// Wrapper to access location for AnimatePresence if we wanted page transitions
// For now, simple routing
const AppContent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
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
