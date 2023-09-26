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
import Footer from "@/components/Footer"
import Feature from "@/components/Feature"
import Collection from "@/components/Collection"
import Category from "@/components/Category"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Mobile menu */}

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

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
