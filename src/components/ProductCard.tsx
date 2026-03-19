import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Watch } from '@/data/watches';

interface ProductCardProps {
  watch: Watch;
  index?: number;
}

export const ProductCard = ({ watch, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link to={`/product/${watch.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-6 border border-foreground/[0.05]">
          <img
            src={watch.images[0]}
            alt={watch.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-background/80 backdrop-blur-md">
            <span className="block text-foreground text-xs uppercase tracking-luxury">
              Quick View
            </span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-foreground font-serif text-xl">{watch.name}</h3>
            <p className="text-muted-foreground text-[11px] uppercase tracking-luxury mt-1">
              {watch.brand}
            </p>
          </div>
          <span className="text-primary/80 font-mono text-sm">
            ${watch.price.toLocaleString()}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
