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
import Header from "./Header"

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691117015/image-hero_rblwrw.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691608118/image-header_ygqjyb.jpg"
          />
          <img
            src="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691608031/image-header_fpvwzd.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50"
      />

      {/* Navigation */}
      <Header />

      <div className="grid lg:grid-cols-2">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center lg:items-start px-6 py-32 text-center lg:text-left sm:py-64 lg:px-8">
          <p className="text-white text-[14px] tracking-[10px] uppercase opacity-50 pb-6">
            New Product
          </p>
          <h1 className="text-[36px] font-bold leading-[40px] tracking-[1px] text-white uppercase lg:text-[56px] lg:leading-[58px] lg:tracking-[2px]">
            XX99 Mark II Headphones
          </h1>
          <p className="mt-4 text-white text-[15px] font-medium leading-[25px] opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a
            href="#"
            className="mt-8 border border-transparent bg-primary px-8 py-3 text-[13px] font-bold text-white tracking-[1px] uppercase hover:bg-primary-hover"
          >
            See Product
          </a>
        </div>
      </div>
    </div>
  )
}
