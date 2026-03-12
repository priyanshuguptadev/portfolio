import { AnimatedPage } from "../components/AnimatedPage";

export const NotFound = () => {
  return (
    <AnimatedPage className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-500">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </AnimatedPage>
  );
};
