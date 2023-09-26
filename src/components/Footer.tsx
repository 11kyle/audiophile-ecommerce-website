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
import Image from "next/image"

const footerNavigation = {
  shop: [
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" },
  ],
}

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[#101010]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              <div>
                <a href="/">
                  <span className="sr-only">Audiophile</span>
                  <Image src="/logo.svg" width={143} height={25} alt="" />
                </a>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.shop.map((item) => (
                    <li key={item.name} className="">
                      <a
                        href={item.href}
                        className="text-[13px] font-bold leading-[25px] tracking-[2px] uppercase text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-16 xl:mt-0">
            <p className="mt-6 text-[15px] font-medium leading-[25px] text-white opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&#39;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&#39;re open 7 days a week.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 py-10 text-white opacity-50">
          <p className="text-[15px] font-bold leading-[25px]">
            Copyright &copy; 2021 Audiophile
          </p>
        </div>
      </div>
    </footer>
  )
}
