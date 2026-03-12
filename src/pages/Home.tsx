import { AnimatedPage } from "../components/AnimatedPage";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <AnimatedPage>
      <Hero />
      <ProjectSection />
    </AnimatedPage>
  );
};

export default Home;
