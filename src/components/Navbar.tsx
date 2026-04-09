import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/store/cartStore';

const navLinks = [
  { label: 'All', href: '/shop' },
  { label: 'Sports', href: '/shop?category=Sports' },
  { label: 'Formal', href: '/shop?category=Formal' },
  { label: 'Luxury', href: '/shop?category=Luxury' },
  { label: 'Diver', href: '/shop?category=Diver' },
  { label: 'Aviation', href: '/shop?category=Aviation' },
  { label: 'Chronograph', href: '/shop?category=Chronograph' },
  { label: 'GMT', href: '/shop?category=GMT' },
  { label: 'Racing', href: '/shop?category=Racing' },
  { label: 'Field', href: '/shop?category=Field' },
  { label: 'Vintage', href: '/shop?category=Vintage' },
  { label: 'Dress', href: '/shop?category=Dress' },
  { label: 'Casual', href: '/shop?category=Casual' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const itemCount = useCart((s) => s.itemCount());

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-background/80 backdrop-blur-xl border-b border-foreground/[0.08]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Left: hamburger on mobile, logo always */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground/60 hover:text-foreground transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link to="/" className="shrink-0">
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight-luxury text-foreground">
                HORLOGER
              </h1>
            </Link>
          </div>

          {/* Center: nav links - desktop only */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[10px] xl:text-[11px] uppercase tracking-luxury text-foreground/50 hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 sm:gap-6">
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
            <div className="px-6 py-6 flex flex-col gap-4">
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
