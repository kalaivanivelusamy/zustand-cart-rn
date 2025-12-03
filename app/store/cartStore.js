import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    itemsCount: 0,
    addToCart: (item) => set((state) => ({
        cart: [...state.cart, item],
        itemsCount: state.itemsCount + 1
    })),
    removeFromCart: (itemId) => set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== itemId)
        return {
            cart: updatedCart,
            itemsCount: state.itemsCount - 1 > 0 ? state.itemsCount - 1 : 0
        }
    }),
    clearCart: () => set(() => ({
        cart: [],
        itemsCount: 0

    }
    ))
}))