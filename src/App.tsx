import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import { NotFound } from "./pages/NotFound";
import AnalyticsTracker from "./components/AnalyticsTracker";

// Wrapper to access location for AnimatePresence if we wanted page transitions
// For now, simple routing
const AppContent = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />

          {/* Fallback route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <footer className="mt-24 pt-12 border-t border-neutral-800 text-center text-neutral-600 text-xs pb-12">
        <p>&copy; {new Date().getFullYear()}. Crafted with simplicity.</p>
      </footer>
    </Layout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <AnalyticsTracker />
    </BrowserRouter>
  );
}

export default App;
