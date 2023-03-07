import { defineStore } from 'pinia'

export const useProductStore = defineStore('product-store', {
  state: () => {
    return {
      products: [],
      headphones: [],
      earphones: [],
      speakers: []
    }
  },
  actions: {
    addProducts(value) {
      this.products.push(value)
    }
  },
  getters: {
    getProducts: (state) => state.products,
    getHeadphones: (state) => state.headphones,
    getEarphones: (state) => state.earphones,
    getSpeakers: (state) => state.speakers
  }
})

export const state = () => ({
  allProducts: [],
  featuredProducts: [],
  newProducts: [],
  cartItems: [],
})

export const getters = {
  // return items from the store
  allProducts: (state) => state.allProducts,
  featuredProducts: (state) => state.featuredProducts,
  newProducts: (state) => state.newProducts,
  getCart: (state) => state.cartItems,
  getCartTotal: (state) => 
    state.cartItems.length < 1
      ? '0'
      : state.cartItems
        .map((el) => el.price * el.quantity)
        .reduce((a, b) => a + b),
}

export const actions = {
  async addItemToCart({ commit }, cartItem) {
    await commit('setCartItem', cartItem)
  },
  async deleteCartItem({ commit }, id) {
    await commit('removeCartItem', id)
  },
}