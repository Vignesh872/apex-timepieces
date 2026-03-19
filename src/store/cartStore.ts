import { create } from 'zustand';
import type { Watch } from '@/data/watches';

export interface CartItem {
  watch: Watch;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (watch: Watch) => void;
  removeItem: (watchId: string) => void;
  updateQuantity: (watchId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  itemCount: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  addItem: (watch) =>
    set((state) => {
      const existing = state.items.find((i) => i.watch.id === watch.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.watch.id === watch.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { watch, quantity: 1 }] };
    }),
  removeItem: (watchId) =>
    set((state) => ({
      items: state.items.filter((i) => i.watch.id !== watchId),
    })),
  updateQuantity: (watchId, quantity) =>
    set((state) => ({
      items: quantity <= 0
        ? state.items.filter((i) => i.watch.id !== watchId)
        : state.items.map((i) =>
            i.watch.id === watchId ? { ...i, quantity } : i
          ),
    })),
  clearCart: () => set({ items: [] }),
  total: () => get().items.reduce((acc, item) => acc + item.watch.price * item.quantity, 0),
  itemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
}));
