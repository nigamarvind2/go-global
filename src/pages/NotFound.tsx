import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-aurora relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="text-center relative z-10">
        <p className="eyebrow mb-3">Page Not Found</p>
        <h1 className="mb-4 text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="btn-outline inline-flex items-center">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
