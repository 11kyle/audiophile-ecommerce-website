/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
"use client"

import { Fragment, useState } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

type ProductsCategoryImage = {
  desktop: String
  mobile: String
  tablet: String
}

type ProductsGallery = {
  first: ProductsGalleryFirst
  second: ProductsGallerySecond
  third: ProductsGalleryThird
}

type ProductsGalleryFirst = {
  desktop: String
  mobile: String
  tablet: String
}

type ProductsGallerySecond = {
  desktop: String
  mobile: String
  tablet: String
}

type ProductsGalleryThird = {
  desktop: String
  mobile: String
  tablet: String
}

type ProductsImage = {
  desktop: String
  mobile: String
  tablet: String
}

type ProductsIncludes = {
  item: String
  quantity: number
}

type ProductsOthers = {
  image: ProductsOthersImage
  name: String
  slug: String
}

type ProductsOthersImage = {
  desktop: String
  mobile: String
  tablet: String
}

type Product = {
  id: String
  category: String
  categoryImage: ProductsCategoryImage
  description: String
  features: String
  gallery: ProductsGallery
  image: ProductsImage
  includes: ProductsIncludes[]
  name: String
  new: Boolean
  others: ProductsOthers[]
  price: number
  slug: String
}

const navigation = {
  categories: [
    {
      name: "Headphones",
      href: "/headphones",
      imageSrc:
        "https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691118066/image-category-thumbnail-headphones_qc7ifn.png",
    },
    {
      name: "Speakers",
      href: "/speakers",
      imageSrc:
        "https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691118066/image-category-thumbnail-speakers_k1lbrn.png",
    },
    {
      name: "Earphones",
      href: "/earphones",
      imageSrc:
        "https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691118065/image-category-thumbnail-earphones_xxm22b.png",
    },
  ],
}

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
]

function saveToLocalStorage(product: Product) {
  Object.assign(product, { quantity: 1 })

  let products = localStorage.getItem("products") // string
  let productsJSON: string = ""

  if (products) {
    let productsArray: Product[] = new Array(JSON.parse(products))

    productsArray.push(product)

    productsJSON = JSON.stringify(productsArray)
  }

  // Add to localStorage
  localStorage.setItem("products", productsJSON)
}

function toLocalStorage() {
  let productToStore = JSON.stringify(products[1])

  localStorage.setItem("product", productToStore)

  console.log("Stored!")
}

toLocalStorage()

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                {/* <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </Tab.Group> */}
                <div className="absolute w-full flex flex-col gap-y-2 px-4 mt-14">
                  {navigation.categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-40 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      {/* <span
                        aria-hidden="true"
                        className="absolute inset-0 z-10"
                      >
                        <img
                          src={category.imageSrc}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span> */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-full bg-[#F1F1F1]"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-black">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-[#161920] bg-opacity-90 backdrop-blur-md backdrop-filter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="/">
                      <span className="sr-only">Audiophile</span>
                      <Image src="/logo.svg" width={143} height={25} alt="" />
                    </a>
                  </div>

                  <div className="hidden lg:flex h-full justify-center items-center space-x-8">
                    {navigation.categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="text-white text-[13px] font-bold leading-[25px] tracking-[2px] uppercase"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile menu (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 p-2 text-white"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="/" className="lg:hidden">
                    <span className="sr-only">Audiophile</span>
                    <Image src="/logo.svg" width={143} height={25} alt="" />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      {/* Cart */}
                      {/* <div className="ml-4 flow-root lg:ml-8">
                        <a
                          href="#"
                          className="group -m-2 flex items-center p-2"
                        >
                          <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-white"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-white">
                            0
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </a>
                      </div> */}
                      {/* Cart */}
                      <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                        <Popover.Button className="group -m-2 flex items-center p-2">
                          <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-white group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-800">
                            {products.length}
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white py-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                            <h2 className="sr-only">Shopping Cart</h2>

                            <form className="mx-auto max-w-2xl px-4">
                              <div className="flex justify-between items-center">
                                <h3 className="text-[18px] font-bold tracking-[1.286px] uppercase">
                                  Cart ({products.length})
                                </h3>
                                <button className="text-[#D87D4A] text-[15px] font-medium leading-[25px] hover:underline">
                                  Remove all
                                </button>
                              </div>
                              <ul
                                role="list"
                                className="divide-y divide-gray-200"
                              >
                                {products.map((product) => (
                                  <li
                                    key={product.id}
                                    className="flex items-center py-6"
                                  >
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-16 w-16 flex-none rounded-md border border-gray-200"
                                    />
                                    <div className="ml-4 flex-auto">
                                      <h3 className="font-medium text-gray-900">
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                  </li>
                                ))}
                              </ul>

                              <button
                                type="submit"
                                className="w-full border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50"
                              >
                                Checkout
                              </button>
                            </form>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
