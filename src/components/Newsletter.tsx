import { useState } from 'react';
import { motion } from 'framer-motion';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-32 px-[5vw]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary/50 uppercase tracking-luxury text-[11px] block mb-4">
            Stay Informed
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            The <span className="italic text-primary/70">Inner Circle</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">
            Receive exclusive previews of new collections, invitations to private viewings,
            and stories from our ateliers.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm"
            >
              Welcome to the inner circle.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-foreground/10 px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-luxury hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
