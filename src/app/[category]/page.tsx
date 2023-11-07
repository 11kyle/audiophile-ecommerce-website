import prisma from "@/utils/prisma"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Filter from "@/components/Filter"
import Link from "next/link"

const breadcrumbs = [{ id: 1, name: "Men", href: "#" }]

function capitalizedWord(word: string) {
  const firstLetter = word.charAt(0).toUpperCase()
  const restOfWord = word.slice(1).toLowerCase()

  return firstLetter + restOfWord
}

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const products = await prisma.products.findMany({
    where: {
      category: {
        equals: params.category,
      },
    },
  })

  return (
    <div className="bg-white">
      <div>
        {/* Header */}
        <Header />
      </div>

      <div>
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 py-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {params.category.toUpperCase()}
            </h1>
          </div>

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            {/* Filter */}
            <Filter />

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                      <img
                        src={product.image.desktop}
                        alt={product.name}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        <Link href={`/${params.category}/${product.slug}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                      <div className="flex flex-1 flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
