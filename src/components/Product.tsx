"use client"

import { HeartIcon } from "@heroicons/react/24/outline"
import ImageGallery from "@/components/ImageGallery"
import Image from "next/image"
import { useShoppingCartContext } from "@/context/ShoppingCartContext"

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

type ProductProps = {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { addProduct } = useShoppingCartContext()

  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      {/* Product */}
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <ImageGallery imgSrc={product.image.desktop} />
        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-black text-[28px] font-bold tracking-[1px] uppercase">
            {product.name}
          </h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-black text-[18px] font-bold tracking-[1.286px] uppercase">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div
              className="space-y-6 text-black text-[15px] font-medium leading-[25px] opacity-50"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
          <div className="mt-6">
            <div className="mt-10 flex">
              <button
                type="submit"
                className="flex max-w-xs flex-1 items-center justify-center 
                border border-transparent bg-primary px-8 py-3 text-[13px] font-bold
                text-white uppercase hover:bg-primary-hover focus:outline-none focus:ring-2
                focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50
                sm:w-full"
                onClick={() => addProduct(product)}
              >
                Add to cart
              </button>
              <button
                type="button"
                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon
                  className="h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Add to favorites</span>
              </button>
            </div>
          </div>
          <section aria-labelledby="features-heading" className="mt-12">
            <h2
              id="features-heading"
              className="text-black text-[24px] font-bold leading-[36px] tracking-[0.857px] uppercase"
            >
              Features
            </h2>
            <div>
              {product.features
                .split(/\r?\n|\r|\n/g)
                .map((str, index) => (
                  <p
                    key={index}
                    className="space-y-6 mt-6 text-black text-[15px] font-medium leading-[25px] opacity-50"
                  >
                    {str}
                  </p>
                ))}
            </div>
          </section>
        </div>
      </div>
      <section
        aria-labelledby="additional-images"
        className="my-16 px-4 sm:px-0"
      >
        <div className="grid md:grid-rows-2 gap-4">
          <div className="rounded-lg overflow-hidden md:row-start-1">
            <img
              src={product.gallery.first.desktop}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            {/* <Image
              src={product[0].gallery.first.desktop}
              alt=""
              fill
              className="h-full w-full object-cover object-center"
            /> */}
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={product.gallery.second.desktop}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="rounded-lg overflow-hidden md:row-start-1 md:row-span-2">
            <img
              src={product.gallery.third.desktop}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
