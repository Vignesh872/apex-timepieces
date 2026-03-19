import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Watch, Compass, Plane, Crown, Clock, Shirt } from 'lucide-react';

const watchTypes = [
  { name: 'Sports', icon: Watch, description: 'Built for performance', href: '/shop?category=Sports' },
  { name: 'Formal', icon: Shirt, description: 'Elegant dress watches', href: '/shop?category=Formal' },
  { name: 'Diver', icon: Compass, description: 'Ocean-ready precision', href: '/shop?category=Diver' },
  { name: 'Aviation', icon: Plane, description: 'Pilot instruments', href: '/shop?category=Aviation' },
  { name: 'Luxury', icon: Crown, description: 'Haute horlogerie', href: '/shop?category=Luxury' },
  { name: 'Vintage', icon: Clock, description: 'Heritage reissues', href: '/shop?category=Vintage' },
];

export const CategoryShowcase = () => {
  return (
    <section className="py-28 px-[5vw] bg-surface-elevated">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary/50 uppercase tracking-luxury text-[11px] block mb-4">
            Explore by Style
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Find Your <span className="italic text-primary/70">Signature</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {watchTypes.map((type, i) => (
            <motion.div
              key={type.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
            >
              <Link
                to={type.href}
                className="group flex flex-col items-center text-center p-6 border border-foreground/[0.06] hover:border-primary/30 bg-card hover:bg-secondary transition-all duration-500 rounded-sm"
              >
                <type.icon
                  size={28}
                  className="text-primary/60 group-hover:text-primary transition-colors duration-300 mb-4"
                  strokeWidth={1.2}
                />
                <h3 className="text-foreground font-serif text-lg mb-1">{type.name}</h3>
                <p className="text-muted-foreground text-[10px] uppercase tracking-luxury">
                  {type.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
