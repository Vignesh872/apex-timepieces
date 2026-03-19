import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { watches } from '@/data/watches';
import { ProductCard } from './ProductCard';

export const FeaturedCollection = () => {
  const featured = watches.filter((w) => w.isFeatured).slice(0, 4);

  return (
    <section className="py-32 px-[5vw]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-primary/50 uppercase tracking-luxury text-[11px] block mb-4">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Featured <span className="italic text-primary/70">Timepieces</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:block text-[11px] uppercase tracking-luxury text-foreground/40 hover:text-primary transition-colors border-b border-foreground/10 pb-1"
          >
            View All
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((watch, i) => (
            <ProductCard key={watch.id} watch={watch} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
