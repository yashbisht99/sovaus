import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface-muted mb-8">
          <span className="font-serif text-4xl text-foreground">404</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-secondary mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-foreground text-background font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
