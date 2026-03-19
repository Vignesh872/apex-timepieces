import { motion } from 'framer-motion';

const brandNames = ['HORLOGER', 'MAISON AUREL', 'ATELIER NOIR'];

export const BrandShowcase = () => {
  return (
    <section className="py-20 border-y border-foreground/[0.05]">
      <div className="max-w-7xl mx-auto px-[5vw]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] uppercase tracking-luxury text-muted-foreground mb-12"
        >
          The Maisons
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
          {brandNames.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="font-serif text-2xl md:text-3xl text-foreground/20 hover:text-primary/60 transition-colors duration-500 cursor-default tracking-tight-luxury"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
