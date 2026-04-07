import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/store/cartStore';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate processing
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 1500);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
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
              to="/cart"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to Cart
            </Link>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Secure <span className="italic text-primary/70">Checkout</span>
            </h2>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Fields */}
              <div className="lg:col-span-2 space-y-10">
                {/* Contact Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-[11px] uppercase tracking-luxury text-primary/60 mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center text-[10px] text-primary">1</span>
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                    />
                  </div>
                </motion.div>

                {/* Shipping Address */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-[11px] uppercase tracking-luxury text-primary/60 mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center text-[10px] text-primary">2</span>
                    Shipping Address
                  </h3>
                  <div className="space-y-4">
                    <input
                      name="address"
                      placeholder="Street Address"
                      required
                      value={form.address}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input
                        name="city"
                        placeholder="City"
                        required
                        value={form.city}
                        onChange={handleChange}
                        className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      />
                      <input
                        name="state"
                        placeholder="State / Province"
                        required
                        value={form.state}
                        onChange={handleChange}
                        className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      />
                      <input
                        name="zip"
                        placeholder="ZIP / Postal Code"
                        required
                        value={form.zip}
                        onChange={handleChange}
                        className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <select
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground focus:outline-none focus:border-primary/40 transition-colors appearance-none"
                    >
                      <option value="" className="bg-background">Select Country</option>
                      <option value="US" className="bg-background">United States</option>
                      <option value="UK" className="bg-background">United Kingdom</option>
                      <option value="CH" className="bg-background">Switzerland</option>
                      <option value="FR" className="bg-background">France</option>
                      <option value="DE" className="bg-background">Germany</option>
                      <option value="JP" className="bg-background">Japan</option>
                      <option value="AE" className="bg-background">United Arab Emirates</option>
                      <option value="SG" className="bg-background">Singapore</option>
                      <option value="IN" className="bg-background">India</option>
                      <option value="OTHER" className="bg-background">Other</option>
                    </select>
                  </div>
                </motion.div>

                {/* Payment */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-[11px] uppercase tracking-luxury text-primary/60 mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center text-[10px] text-primary">3</span>
                    Payment Details
                  </h3>
                  <div className="space-y-4">
                    <input
                      name="cardName"
                      placeholder="Name on Card"
                      required
                      value={form.cardName}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <input
                      name="cardNumber"
                      placeholder="Card Number"
                      required
                      maxLength={19}
                      value={form.cardNumber}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors font-mono"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        name="expiry"
                        placeholder="MM / YY"
                        required
                        maxLength={5}
                        value={form.expiry}
                        onChange={handleChange}
                        className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors font-mono"
                      />
                      <input
                        name="cvv"
                        placeholder="CVV"
                        required
                        maxLength={4}
                        value={form.cvv}
                        onChange={handleChange}
                        className="bg-transparent border border-foreground/10 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors font-mono"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Order Summary Sidebar */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border border-foreground/[0.05] p-8 h-fit sticky top-28"
              >
                <h3 className="text-[11px] uppercase tracking-luxury text-foreground/40 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.watch.id} className="flex gap-4">
                      <div className="w-14 h-14 shrink-0 overflow-hidden bg-surface border border-foreground/[0.05]">
                        <img src={item.watch.images[0]} alt={item.watch.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground text-sm font-serif truncate">{item.watch.name}</p>
                        <p className="text-muted-foreground text-[10px] uppercase tracking-luxury">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-foreground font-mono text-xs shrink-0">
                        ${(item.watch.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-foreground/[0.05] pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground font-mono">${total().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-primary text-[11px] uppercase tracking-luxury">Complimentary</span>
                  </div>
                </div>

                <div className="border-t border-foreground/[0.05] pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-foreground font-serif text-lg">Total</span>
                    <span className="text-foreground font-mono text-lg">${total().toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground text-xs uppercase tracking-luxury hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    <>
                      <Lock size={12} />
                      Place Order
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <Lock size={10} className="text-muted-foreground" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-luxury">
                    256-bit SSL Encrypted
                  </p>
                </div>
              </motion.div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
