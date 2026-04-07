import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const OrderSuccess = () => {
  const orderNumber = `HLG-${Date.now().toString(36).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-32 px-[5vw]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <CheckCircle size={40} className="text-primary" />
              </motion.div>
              {/* Animated ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute inset-0 rounded-full border border-primary/40"
              />
            </div>
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="text-primary/60 uppercase tracking-luxury text-[11px] block mb-4">
              Order Confirmed
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Thank You for Your <span className="italic text-primary/70">Purchase</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Your order has been placed successfully. A confirmation email with your order details
              will be sent to you shortly.
            </p>
          </motion.div>

          {/* Order Number */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block border border-foreground/[0.08] px-10 py-6 mb-12"
          >
            <p className="text-[10px] uppercase tracking-luxury text-muted-foreground mb-2">
              Order Number
            </p>
            <p className="font-mono text-xl text-primary tracking-wider">{orderNumber}</p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            <div className="border border-foreground/[0.05] p-6 text-left">
              <Package size={20} className="text-primary/60 mb-3" />
              <h4 className="font-serif text-foreground mb-1">Shipping</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Your timepiece will be carefully packaged and shipped within 2–5 business days
                with complimentary insured delivery.
              </p>
            </div>
            <div className="border border-foreground/[0.05] p-6 text-left">
              <Mail size={20} className="text-primary/60 mb-3" />
              <h4 className="font-serif text-foreground mb-1">Confirmation Email</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                A detailed receipt and tracking information will be sent to your email address
                once your order has been dispatched.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-luxury hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/"
              className="inline-flex px-10 py-4 border border-foreground/10 text-foreground text-xs uppercase tracking-luxury hover:border-primary/30 transition-colors"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
