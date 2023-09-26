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

const categories = [
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
]

export default function Category() {
  return (
    <section
      aria-labelledby="category-heading"
      className="my-24 sm:my-32 xl:mx-auto xl:max-w-7xl xl:px-8"
    >
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2
          id="category-heading"
          className="text-black text-[24px] font-bold leading-[36px] tracking-[0.857px] uppercase lg:text-[32px] lg:tracking-[1.143px]"
        >
          Shop by Category
        </h2>
      </div>

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img
                      src={category.imageSrc}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-xl font-bold text-white">
                    {category.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
