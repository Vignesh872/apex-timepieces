import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The Tourbillon Squelette is not merely a watch—it is a philosophical statement about the transparency of craft.",
    author: "Laurent D.",
    title: "Collector, Geneva",
    rating: 5,
  },
  {
    quote: "After twenty years of collecting, the Heritage Chronograph remains my daily companion. The movement is extraordinary.",
    author: "James W.",
    title: "Horologist",
    rating: 5,
  },
  {
    quote: "The attention to finishing rivals houses at three times the price. The Celestial Navigator is pure poetry on the wrist.",
    author: "Sofia M.",
    title: "Watch Journalist",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-[5vw] bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary/50 uppercase tracking-luxury text-[11px] block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Words of <span className="italic text-primary/70">Distinction</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="border border-foreground/[0.05] p-10 hover:border-primary/20 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8 italic font-serif text-lg">
                "{t.quote}"
              </p>
              <div>
                <p className="text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-[11px] uppercase tracking-luxury mt-1">
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
