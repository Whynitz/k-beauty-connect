import { Link, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        {!isHome ? (
          <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        ) : (
          <div />
        )}
        
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-display text-xl tracking-wide">
            <span className="text-foreground">K-Beauty</span>
            <span className="text-primary"> Abroad</span>
          </h1>
        </Link>

        <div className="w-16" />
      </div>
    </header>
  );
};
