import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="page-shell flex min-h-screen items-center justify-center px-4">
      <div className="section-shell w-full max-w-xl text-center">
        <p className="section-kicker">404</p>
        <h1 className="page-title">Page not found</h1>
        <p className="subtle-copy mb-6">The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="cta-button">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
