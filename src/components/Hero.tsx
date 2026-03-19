import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, transition } from '@/lib/motion';
import heroImage from '@/assets/hero-watch.jpg';

export const Hero = () => {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-background flex items-center px-[5vw]">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          className="w-full h-full object-cover opacity-50"
          alt="Luxury Watch Detail"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-4xl">
        <motion.span
          {...fadeInUp}
          transition={{ ...transition, delay: 0.2 }}
          className="block text-primary/60 uppercase tracking-luxury text-xs mb-6"
        >
          Established 1894
        </motion.span>
        <motion.h2
          {...fadeInUp}
          transition={{ ...transition, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-8xl font-serif text-foreground leading-[0.9] mb-8"
        >
          The Weight of <br />
          <span className="italic text-primary/80">Legacy.</span>
        </motion.h2>
        <motion.p
          {...fadeInUp}
          transition={{ ...transition, delay: 0.6 }}
          className="text-foreground/40 max-w-md text-sm leading-relaxed mb-10"
        >
          Where centuries of horological mastery converge with contemporary design.
          Each timepiece, a testament to the art of precision.
        </motion.p>
        <motion.div {...fadeInUp} transition={{ ...transition, delay: 0.8 }}>
          <Link
            to="/shop"
            className="group relative inline-flex px-12 py-5 border border-foreground/20 hover:border-primary/50 transition-colors duration-500"
          >
            <span className="relative z-10 text-foreground uppercase tracking-luxury text-xs">
              Explore Collection
            </span>
            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 opacity-10" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-luxury text-foreground/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent"
        />
      </motion.div>
    </section>
  );
};
