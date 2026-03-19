import { motion } from 'framer-motion';
import watch5 from '@/assets/watch-5.jpg';

export const CraftsmanshipBanner = () => {
  return (
    <section className="relative py-32 px-[5vw] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={watch5} alt="Mechanical movement" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-primary/50 uppercase tracking-luxury text-[11px] block mb-4">
            The Art of Time
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            300 Hours of <span className="italic text-primary/70">Devotion</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Each movement is assembled by hand, tested across six positions, and regulated
            to chronometric precision. Our master watchmakers dedicate over 300 hours to every
            grand complication—a commitment to excellence that cannot be rushed.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '126', label: 'Years' },
              { value: '47', label: 'Artisans' },
              { value: '300+', label: 'Hours per piece' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-serif text-3xl text-primary">{stat.value}</span>
                <p className="text-[10px] uppercase tracking-luxury text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="aspect-square border border-foreground/[0.05] overflow-hidden">
            <img src={watch5} alt="Watch movement" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
