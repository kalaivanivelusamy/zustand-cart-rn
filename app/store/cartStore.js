import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],
    itemsCount: 0,

    addToCart: (product) => set((state) => {
        state.itemsCount += 1;
        const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        // Increase quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // Add new item
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

    removeFromCart: (itemId) => set((state) => {
        const existing = state.cart.find((item) => item.id === itemId);
        existing.quantity -= 1;

        if (existing.quantity > 0) {
            const updatedCart = state.cart.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity }
                    : item
            );
            return {
                cart: updatedCart,
                itemsCount: state.itemsCount - 1 >= 0 ? state.itemsCount - 1 : 0
            }
        } else {
            const updatedCart = state.cart.filter((item) => item.id !== itemId);
            return {
                cart: updatedCart,
                itemsCount: state.itemsCount - 1 >= 0 ? state.itemsCount - 1 : 0
            }
        }
        
    }),

    clearCart: () => set(() => ({
        cart: [],
        itemsCount: 0

    }
    ))
}));