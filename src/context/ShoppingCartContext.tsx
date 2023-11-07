"use client"

import { createContext, useContext, useState } from "react";

type ProductsCategoryImage = {
  desktop: string
  mobile: string
  tablet: string
}

type ProductsGallery = {
  first: ProductsGalleryFirst
  second: ProductsGallerySecond
  third: ProductsGalleryThird
}

type ProductsGalleryFirst = {
  desktop: string
  mobile: string
  tablet: string
}

type ProductsGallerySecond = {
  desktop: string
  mobile: string
  tablet: string
}

type ProductsGalleryThird = {
  desktop: string
  mobile: string
  tablet: string
}

type ProductsImage = {
  desktop: string
  mobile: string
  tablet: string
}

type ProductsIncludes = {
  item: string
  quantity: number
}

type ProductsOthers = {
  image: ProductsOthersImage
  name: string
  slug: string
}

type ProductsOthersImage = {
  desktop: string
  mobile: string
  tablet: string
}

type Product = {
  id: string
  category: string
  categoryImage: ProductsCategoryImage
  description: string
  features: string
  gallery: ProductsGallery
  image: ProductsImage
  includes: ProductsIncludes[]
  name: string
  new: boolean
  others: ProductsOthers[]
  price: number
  slug: string
}

type ShoppingCartProduct = {
  product: Product
  quantity: number
}

type ShoppingCartContext = {
  products: ShoppingCartProduct[]
  setProducts: React.Dispatch<React.SetStateAction<ShoppingCartProduct[]>>
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  addProduct: (newProduct: Product) => void
  removeProduct: (productId: string) => void
}

const ShoppingCartContext = createContext<ShoppingCartContext | null>(null)

type ShoppingCartContextProviderProps = {
  children: React.ReactNode
}

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
  const [products, setProducts] = useState<ShoppingCartProduct[]>([])
  
  const addProduct = (newProduct: Product) => {
    setProducts([...products, {
      product: newProduct,
      quantity: 1
    }])
  }

  const removeProduct = (productId: string) => {
    const newProducts = [...products].filter(cartItem => (
      cartItem.product.id !== productId
    ))

    setProducts(newProducts)
  }

  const increaseQuantity = (productId: string) => {
    const newProducts = [...products].map(cartItem => {
      if (cartItem.product.id === productId) {
        return {...cartItem, quantity: cartItem.quantity + 1}
      } else {
        return cartItem
      }
    })
  }

  const decreaseQuantity = (productId: string) => {
    const newProducts = [...products].map(cartItem => {
      if (cartItem.product.id === productId) {
        return {...cartItem, quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0}
      } else {
        return cartItem
      }
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{ 
        products,
        setProducts,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext)

  if (!context) {
    throw new Error(
      "useShoppingCartContext must be used inside ShoppingCartContextProvider"
    )
  }

  return context
}