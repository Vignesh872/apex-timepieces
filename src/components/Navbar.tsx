import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/store/cartStore';

const navLinks = [
  { label: 'Collections', href: '/shop' },
  { label: 'Complications', href: '/shop?category=Complication' },
  { label: 'Heritage', href: '/shop?category=Dress' },
  { label: 'Sport', href: '/shop?category=Sport' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const itemCount = useCart((s) => s.itemCount());

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background/80 backdrop-blur-xl border-b border-foreground/[0.08]">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground/60 hover:text-foreground transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Nav links - desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] uppercase tracking-luxury text-foreground/50 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-serif text-2xl md:text-3xl tracking-tight-luxury text-foreground">
              HORLOGER
            </h1>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-6">
            <Link to="/shop" className="text-foreground/50 hover:text-foreground transition-colors">
              <Search size={18} />
            </Link>
            <Link to="/cart" className="relative text-foreground/50 hover:text-foreground transition-colors">
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-mono"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-foreground/[0.08] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-luxury text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
