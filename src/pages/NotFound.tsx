import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." noIndex />
      <div className="page-content flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="eyebrow mb-3">Page Not Found</p>
          <h1 className="text-5xl font-bold text-foreground mb-4">404</h1>
          <p className="text-sm text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
