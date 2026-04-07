import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/store/cartStore';

const Cart = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-32 px-[5vw] flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <ShoppingBag size={48} className="mx-auto mb-6 text-foreground/20" />
            <h2 className="font-serif text-3xl text-foreground mb-4">Your Collection is Empty</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Discover exceptional timepieces in our collection.
            </p>
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-luxury hover:bg-primary/90 transition-colors"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-32 px-[5vw]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-12"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Your <span className="italic text-primary/70">Selection</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.watch.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 border border-foreground/[0.05] p-6"
                >
                  <Link to={`/product/${item.watch.id}`} className="w-28 h-36 shrink-0 overflow-hidden bg-surface">
                    <img
                      src={item.watch.images[0]}
                      alt={item.watch.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-lg text-foreground">{item.watch.name}</h3>
                          <p className="text-[11px] uppercase tracking-luxury text-muted-foreground mt-1">
                            {item.watch.brand}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.watch.id)}
                          className="text-foreground/30 hover:text-foreground transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-foreground/10">
                        <button
                          onClick={() => updateQuantity(item.watch.id, item.quantity - 1)}
                          className="p-2 text-foreground/50 hover:text-foreground transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs text-foreground font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.watch.id, item.quantity + 1)}
                          className="p-2 text-foreground/50 hover:text-foreground transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-mono text-sm text-primary">
                        ${(item.watch.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border border-foreground/[0.05] p-8 h-fit"
            >
              <h3 className="text-[11px] uppercase tracking-luxury text-foreground/40 mb-8">
                Order Summary
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground font-mono">${total().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary text-[11px] uppercase tracking-luxury">Complimentary</span>
                </div>
              </div>
              <div className="border-t border-foreground/[0.05] pt-6 mb-8">
                <div className="flex justify-between">
                  <span className="text-foreground font-serif text-lg">Total</span>
                  <span className="text-foreground font-mono text-lg">${total().toLocaleString()}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block w-full py-4 bg-primary text-primary-foreground text-xs uppercase tracking-luxury hover:bg-primary/90 transition-colors mb-4 text-center"
              >
                Proceed to Checkout
              </Link>
              <p className="text-[10px] text-center text-muted-foreground uppercase tracking-luxury">
                Secure payment · International delivery
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
