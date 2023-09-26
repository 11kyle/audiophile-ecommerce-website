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

export default function Feature() {
  return (
    <section
      aria-labelledby="social-impact-heading"
      className="mx-auto max-w-7xl px-4 my-24 sm:px-6 sm:my-32 lg:px-8"
    >
      <div className="lg:grid lg:grid-cols-2">
        <div className="inset-0 overflow-hidden rounded-lg">
          <img
            src="https://res.cloudinary.com/dqrjhxnh4/image/upload/v1691118372/image-best-gear_olm1iq.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative px-6 pt-10 sm:px-12 sm:pt-16 lg:px-16 lg:pt-0">
          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2
              id="social-impact-heading"
              className="text-black text-[28px] font-bold tracking-[1px] uppercase lg:text-[40px] lg:leading-[44px] lg:tracking-[1.5px]"
            >
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </h2>
            <p className="mt-3 text-black text-[15px] font-medium leading-[25px] opacity-50">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
