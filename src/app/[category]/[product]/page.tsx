import Footer from "@/components/Footer"
import Header from "@/components/Header"
import prisma from "@/utils/prisma"
import Product from "@/components/Product"

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
        <Product product={product[0]} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
