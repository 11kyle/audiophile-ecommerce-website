/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react"
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/20/solid"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Colors from "@/components/Colors"
import ImageGallery from "@/components/ImageGallery"
import prisma from "@/utils/prisma"
import Feature from "@/components/Feature"
import Image from "next/image"

const relatedProducts = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  // More products...
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default async function Page({
  params,
}: {
  params: { category: string; product: string }
}) {
  const product = await prisma.products.findMany({
    where: {
      slug: {
        equals: params.product,
      },
    },
  })

  console.log(params)
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <ImageGallery imgSrc={product[0].image.desktop} />

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-black text-[28px] font-bold tracking-[1px] uppercase">
                {product[0].name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-black text-[18px] font-bold tracking-[1.286px] uppercase">
                  ${product[0].price.toFixed(2)}
                </p>
              </div>

              {/* Reviews */}
              {/* <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-indigo-500"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div> */}

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-black text-[15px] font-medium leading-[25px] opacity-50"
                  dangerouslySetInnerHTML={{ __html: product[0].description }}
                />
              </div>

              <form className="mt-6">
                {/* Colors */}
                <Colors />

                <div className="mt-10 flex">
                  <button
                    type="submit"
                    className="flex max-w-xs flex-1 items-center justify-center 
                    border border-transparent bg-primary px-8 py-3 text-[13px] font-bold
                     text-white uppercase hover:bg-primary-hover focus:outline-none focus:ring-2
                      focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50
                       sm:w-full"
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
              </form>

              <section aria-labelledby="features-heading" className="mt-12">
                <h2
                  id="features-heading"
                  className="text-black text-[24px] font-bold leading-[36px] tracking-[0.857px] uppercase"
                >
                  Features
                </h2>
                <div>
                  {product[0].features
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

              {/* <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(
                                  open ? "text-indigo-600" : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="prose prose-sm pb-6"
                          >
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section> */}
            </div>
          </div>

          <section
            aria-labelledby="additional-images"
            className="my-16 px-4 sm:px-0"
          >
            <div className="grid md:grid-rows-2 gap-4">
              <div className="rounded-lg overflow-hidden md:row-start-1">
                <img
                  src={product[0].gallery.first.desktop}
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
                  src={product[0].gallery.second.desktop}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="rounded-lg overflow-hidden md:row-start-1 md:row-span-2">
                <img
                  src={product[0].gallery.third.desktop}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </section>

          {/* <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
          >
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Add to bag
                      <span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
