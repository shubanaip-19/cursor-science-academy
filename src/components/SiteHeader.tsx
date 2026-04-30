import { Link } from "@tanstack/react-router";
import { Atom } from "lucide-react";

export function SiteHeader() {
  const linkCls = "text-sm text-muted-foreground hover:text-foreground transition-smooth";
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <Atom className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">Cursor</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground font-medium" }}>Home</Link>
          <Link to="/courses" className={linkCls} activeProps={{ className: "text-foreground font-medium" }}>Courses</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-foreground font-medium" }}>About</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-foreground font-medium" }}>Contact</Link>
        </nav>
        <Link
          to="/courses"
          className="hidden sm:inline-flex h-9 items-center rounded-md bg-gradient-primary px-4 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
        >
          Start Learning
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Cursor. Sparking curiosity in young scientists.</p>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-foreground transition-smooth">About</Link>
          <Link to="/courses" className="hover:text-foreground transition-smooth">Courses</Link>
          <Link to="/contact" className="hover:text-foreground transition-smooth">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
