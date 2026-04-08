import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { watches, brands, categories } from '@/data/watches';

type SortOption = 'latest' | 'price-low' | 'price-high' | 'popular';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';

  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [sort, setSort] = useState<SortOption>('latest');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filtered = useMemo(() => {
    let result = [...watches];

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (w) => w.name.toLowerCase().includes(s) || w.brand.toLowerCase().includes(s)
      );
    }
    if (selectedBrand) result = result.filter((w) => w.brand === selectedBrand);
    if (selectedCategory) result = result.filter((w) => w.category === selectedCategory);
    result = result.filter((w) => w.price >= priceRange[0] && w.price <= priceRange[1]);

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'popular': result.sort((a, b) => b.reviews - a.reviews); break;
      default: break;
    }

    return result;
  }, [search, selectedBrand, selectedCategory, priceRange, sort]);

  const clearFilters = () => {
    setSearch('');
    setSelectedBrand('');
    setSelectedCategory('');
    setPriceRange([0, 100000]);
    setSort('latest');
  };

  const hasActiveFilters = search || selectedBrand || selectedCategory || priceRange[0] > 0 || priceRange[1] < 100000;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-[5vw]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="text-primary/50 uppercase tracking-luxury text-[11px] block mb-4">
              The Collection
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground">
              {selectedCategory || 'All'} <span className="italic text-primary/70">Timepieces</span>
            </h2>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-[5vw] pb-32">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-foreground/[0.05]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-[11px] uppercase tracking-luxury text-foreground/50 hover:text-foreground transition-colors border border-foreground/10 px-4 py-2"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-[11px] uppercase tracking-luxury text-primary/70 hover:text-primary transition-colors"
              >
                <X size={12} />
                Clear
              </button>
            )}
            <span className="text-[11px] text-muted-foreground">
              {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-luxury text-muted-foreground">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-transparent text-foreground text-sm border border-foreground/10 px-3 py-1.5 focus:outline-none focus:border-primary/40"
            >
              <option value="latest">Latest</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="popular">Popularity</option>
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Filters sidebar */}
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-64 shrink-0 hidden md:block"
            >
              {/* Search */}
              <div className="mb-8">
                <label className="text-[11px] uppercase tracking-luxury text-muted-foreground block mb-3">
                  Search
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search timepieces..."
                  className="w-full bg-transparent border border-foreground/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                />
              </div>

              {/* Brand */}
              <div className="mb-8">
                <label className="text-[11px] uppercase tracking-luxury text-muted-foreground block mb-3">
                  Maison
                </label>
                <div className="flex flex-col gap-2">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBrand(selectedBrand === b ? '' : b)}
                      className={`text-left text-sm py-1.5 transition-colors ${
                        selectedBrand === b ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-8">
                <label className="text-[11px] uppercase tracking-luxury text-muted-foreground block mb-3">
                  Category
                </label>
                <div className="flex flex-col gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(selectedCategory === c ? '' : c)}
                      className={`text-left text-sm py-1.5 transition-colors ${
                        selectedCategory === c ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <label className="text-[11px] uppercase tracking-luxury text-muted-foreground block mb-3">
                  Price Range
                </label>
                <input
                  type="range"
                  min={0}
                  max={100000}
                  step={1000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-gold"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </motion.aside>
          )}

          {/* Products grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-serif text-xl">No timepieces match your criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((watch, i) => (
                  <ProductCard key={watch.id} watch={watch} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
