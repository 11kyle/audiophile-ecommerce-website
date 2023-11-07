import Footer from "@/components/Footer"
import Feature from "@/components/Feature"
import Collection from "@/components/Collection"
import Category from "@/components/Category"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <Hero />
      <main>
        <section
          aria-labelledby="featured-products-heading"
          className="px-4 my-24 sm:px-6 sm:my-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          {/* ZX7 Speaker banner */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691606026/image-speaker-zx7_rhmync.jpg"
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691608117/image-speaker-zx7_hvpwh1.jpg"
                  media="(min-width: 768px"
                />
                <img
                  src="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691608031/image-speaker-zx7_ekligm.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>
            <div className="absolute left-6 md:left-10 lg:left-24 top-1/2 -translate-y-1/2 inline-flex flex-col justify-center items-start gap-8">
              <h3 className="text-[28px] font-bold leading-normal tracking-[2px] uppercase">
                ZX7 Speaker
              </h3>
              <button className="w-40 h-12 border border-black text-[13px] font-bold tracking-[1px] uppercase hover:bg-black hover:text-white">
                See Product
              </button>
            </div>
          </div>

          {/* YX1 Eaphones banner */}
          <div className="grid auto-rows-fr md:grid-cols-2 gap-4 my-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691606025/image-earphones-yx1_c0fxpt.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="min-h-[200px] inline-flex flex-col justify-center items-start gap-8 rounded-lg bg-[#F1F1F1] pl-6 md:pl-10 lg:pl-24">
              <h3 className="text-[28px] font-bold leading-normal tracking-[2px] uppercase">
                YX1 Earphones
              </h3>
              <button className="w-40 h-12 border border-black text-[13px] font-bold tracking-[1px] uppercase hover:bg-black hover:text-white">
                See Product
              </button>
            </div>
          </div>
        </section>

        {/* Category section */}
        <Category />

        {/* Collection section */}
        {/* <Collection /> */}

        {/* Featured section */}
        <Feature />
      </main>

      <Footer />
    </div>
  )
}
