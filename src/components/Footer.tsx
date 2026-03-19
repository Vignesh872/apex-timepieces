import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-foreground/[0.05] py-20 px-[5vw]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-4 tracking-tight-luxury">HORLOGER</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Crafting exceptional timepieces since 1894. Swiss precision, timeless design.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-luxury text-foreground/40 mb-6">Collections</h4>
            <div className="flex flex-col gap-3">
              <Link to="/shop?category=Dress" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dress Watches</Link>
              <Link to="/shop?category=Sport" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sport</Link>
              <Link to="/shop?category=Complication" className="text-sm text-muted-foreground hover:text-primary transition-colors">Complications</Link>
              <Link to="/shop?category=Diver" className="text-sm text-muted-foreground hover:text-primary transition-colors">Diver</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-luxury text-foreground/40 mb-6">Maison</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">Our Heritage</span>
              <span className="text-sm text-muted-foreground">Craftsmanship</span>
              <span className="text-sm text-muted-foreground">Ateliers</span>
              <span className="text-sm text-muted-foreground">Sustainability</span>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-luxury text-foreground/40 mb-6">Service</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">Contact</span>
              <span className="text-sm text-muted-foreground">Care & Maintenance</span>
              <span className="text-sm text-muted-foreground">Warranty</span>
              <span className="text-sm text-muted-foreground">Boutique Locator</span>
            </div>
          </div>
        </div>
        <div className="border-t border-foreground/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground uppercase tracking-luxury">
            © 2024 Horloger. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[11px] text-muted-foreground uppercase tracking-luxury">Privacy</span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-luxury">Terms</span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-luxury">Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
