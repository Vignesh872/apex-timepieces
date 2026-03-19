import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, ArrowLeft, Heart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { watches } from '@/data/watches';
import { useCart } from '@/store/cartStore';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const watch = watches.find((w) => w.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((s) => s.addItem);

  if (!watch) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground font-serif text-xl">Timepiece not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(watch);
    toast.success(`${watch.name} added to your collection`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-32 px-[5vw]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Collection
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image gallery */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface border border-foreground/[0.05] mb-4">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={watch.images[selectedImage]}
                  alt={watch.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {watch.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square overflow-hidden border transition-colors ${
                      selectedImage === i
                        ? 'border-primary/50'
                        : 'border-foreground/[0.05] hover:border-foreground/20'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="text-[11px] uppercase tracking-luxury text-primary/60 mb-3">
                {watch.brand}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                {watch.name}
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(watch.rating) ? 'fill-primary text-primary' : 'text-foreground/20'}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-muted-foreground">
                  {watch.rating} ({watch.reviews} reviews)
                </span>
              </div>

              <span className="font-mono text-2xl text-primary mb-8">
                ${watch.price.toLocaleString()}
              </span>

              <p className="text-muted-foreground text-sm leading-relaxed mb-10">
                {watch.description}
              </p>

              {/* Specs */}
              <div className="border-t border-foreground/[0.05] pt-8 mb-10">
                <h3 className="text-[11px] uppercase tracking-luxury text-foreground/40 mb-6">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(watch.specs).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-[10px] uppercase tracking-luxury text-muted-foreground block mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to cart */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center border border-foreground/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm text-foreground font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <span className="text-[11px] text-muted-foreground">
                  {watch.stock} in stock
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-luxury hover:bg-primary/90 transition-colors"
                >
                  Add to Collection
                </button>
                <button className="p-4 border border-foreground/10 text-foreground/50 hover:text-primary hover:border-primary/30 transition-colors">
                  <Heart size={18} />
                </button>
              </div>

              <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-luxury">
                Complimentary worldwide shipping · 5-year warranty
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
