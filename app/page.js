import { FeaturedProducts, FeaturedBlogs, Navb } from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import 'swiper/swiper-bundle.css';

export const metadata = async () => {
  return {
    metadataBase: new URL("https://www.elitetreatforpets.com"),
    title: "Elite Treat For Pets - Chew Healthy,Live happy",
    appleMobileWebAppTitle: 'Elite Treat For Pets - Chew Healthy,Live happy',
    authors: [
      {
        name: "Elite Treat For Pets",
        url: "https://www.elitetreatforpets.com/",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: "Elite Treat For Pets",
      images: "https://www.elitetreatforpets.com/logoP.png"
    },
    openGraph: {
      type: "website",
      url: `https://www.elitetreatforpets.com/`,
      title: "Elite Treat For Pets",
      image: "https://www.elitetreatforpets.com/logoP.png",
      siteName: "Elite Treat For Pets",
      images: [
        {
          url: "https://www.elitetreatforpets.com/logoP.png",
        },
      ],
    },
    assets: "https://www.elitetreatforpets.com/logoP.png",
  }
}

function Home() {
  return (
    <>
      <div >
        {/* Hero section */}
        <div className="bg-gradient-to-b from-orange-200 to-orange-400 ">
          <div className="h-max pb-4" style={{ maxWidth: "1820px", margin: "0 auto" }}>
            {/* <MainNavbar /> */}
            <Navb linkActive='1' />
            <div className="flex flex-row py-28">
              <div className="sm:mx-10 mx-2 sm:py-10 sm:my-8 lg:w-5/6">
                <h2 className="text-6xl mb-23 lg:w-4/6 w-full sm:mb-10 mb-5 text-amber-600 font-bold sm:text-7xl font-playfair_display leading-2xl sm:leading-7xl" >Buy for your <span className="text-amber-900">pet</span> whatever is needed</h2>
                <h3 className="lg:w-3/5 mt-2 sm:text-3xl text-xl sm:mb-6 mb-5 font-light text-amber-900 sm:leading-8xl leading-snug font-open_sans w-full" style={{
                  fontFamily: 'open_sans'
                }}>
                  Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all natural and made from Free-Range, Grass-Fed Beef to ensure a nutritious and flavorful snack for your pups
                </h3>
                <Link href='/products'>
                  <button className='rounded-full font-serif py-2 sm:px-6  border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-64 w-full'>
                    Browse All products
                  </button>
                </Link>
              </div>
              {/* images */}
              <div>
                <div className="absolute bg-orange-400 lg:block hidden" style={{
                  borderRadius: '50%',
                  width: '28rem',
                  height: '28rem',
                  left: '56%',
                }}>
                  <Image
                    src='/bankt.png'
                    alt="Bully Stick"
                    width={300}
                    height={320}
                    style={{
                      borderWidth: '2px'
                    }}
                    className="w-52 h-60 absolute bottom-52 rounded-xl left-5 border-orange-400"
                  />
                  <Image
                    src='/hero-2.png'
                    alt="Bully Stick"
                    width={300}
                    height={320}
                    style={{
                      borderWidth: '2px'
                    }}
                    className="bottom-0 absolute left-60 top-52  w-48 h-60 rounded border-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mx-10 mx-2 my-2 sm:py-14 py-7 flex sm:flex-row sm:space-x-0 flex-col space-y-2" style={{ maxWidth: "1820px", margin: "0 auto" }}>
          <div>
            <h2 className="text-3xl leading-10xl text-center sm:text-left  sm:leading-7xl sm:text-7xl mb-23 sm:w-11/12 w-full sm:mb-10 mb-5 text-amber-700 font-bold" style={{
              fontFamily: 'playfair_display'
            }}>What makes us different from others</h2>
            <h3 className="sm:w-5/6 w-full mt-2 text-center sm:text-left  sm:leading-8xl sm:text-8xl leading-snug text-xl mb-6 font-light text-slate-900">
              With a long-standing reputation for excellence, we&apos;ve established ourselves as the premier choice for discerning pet owners who demand nothing but the best for their furry companions
            </h3>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="sm:flex sm:flex-row-reverse sm:space-y-2 align-middle mb-2 flex flex-col space-y-2 ">
              <div className="flex flex-col  align-middle">
                <Image
                  src='/awardRibbon.png'
                  alt="Quality product"
                  height={200}
                  width={100}
                  className="mx-auto"
                />
                <h2 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
                }}
                >
                  Before our bully sticks make it to your pet, they undergo meticulous testing protocols to ensure they meet our high standards for safety, taste, and overall quality.
                </h2>
              </div>
              <div className="flex flex-col  align-middle justify-center">
                <Image
                  alt='FDA certified product'
                  src='/fd.png'
                  height={170}
                  width={170}
                  className="mx-auto"
                />
                <h3 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
                }}>
                  Every pet owner wants the best for their furry friend, and that&apos;s why we leave no stone unturned when it comes to quality.Our bully sticks are not just any treats; they are a promise of safety and excellence...
                  <Link href='/blogs/65f813000f2c638239fa59ff' className="text-orange-500 font-bold">Learn more</Link>
                </h3>
              </div>

            </div>
            <div >



              <div className="sm:flex sm:flex-row sm:space-y-2 mb-2 flex flex-col space-y-2 ">
                <div className="flex flex-col  align-middle">
                  <Image
                    src='/testRibbon.png'
                    alt="Quality product"
                    height={200}
                    width={100}
                    className="mx-auto"
                  />

                  <h2 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                    lineHeight: '1.5rem',
                  }}
                  >
                    Free from artificial additives and preservatives, our bully sticks stand out for their pure, natural goodness.
                  </h2>
                </div>
                <div className="flex flex-col  align-middle">
                  <Image
                    src='/qualityRibbon.png'
                    alt="Quality product"
                    height={200}
                    width={100}
                    className="mx-auto"
                  />
                  <h3 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                    lineHeight: '1.5rem',
                  }}>
                    We go above and beyond industry standards to ensure the health and safety of both pets and their owners, offering peace of mind with every purchase.
                  </h3>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Difference Section */}

        <FeaturedProducts />

        {/* Tips Section */}
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid md:grid-cols-5 gap-10">
            <div class="md:col-span-2">
              <div class="max-w-xs">
                <h2 className="text-4xl mb-23 sm:w-5/6 w-full mb-6  sm:text-9xl leading-tight sm:leading-7xl text-amber-700 font-bold" style={{
                  fontFamily: 'playfair_display'
                }}>Frequently<br />asked questions</h2>

                <p class="mt-1 hidden md:block text-gray-800 dark:text-neutral-800">Answers to the most frequently asked questions.</p>
              </div>
            </div>

            <div class="md:col-span-3">
              <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-600 dark:hover:text-neutral-300 dark:focus:text-neutral-800" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                    What are your bully Sticks made of?
                    <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                  </button>
                  <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <p class="text-gray-600 dark:text-neutral-400">
                      Our Bully Sticks are made from natural grass-fed Bull penis.
                    </p>
                  </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                  <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-600 dark:hover:text-neutral-300 dark:focus:text-neutral-800" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                    Where do you manufacture Bully Sticks?
                    <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                  </button>
                  <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                    <p class="text-gray-600 dark:text-neutral-400">
                      We manufacture our bully Sticks in Kenya Nairobi,and supply them across the USA
                    </p>
                  </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                  <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-600 dark:hover:text-neutral-300 dark:focus:text-neutral-800" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                    Can I get a custom order for Bully Sticks?
                    <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                  </button>
                  <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                    <p class="text-gray-600 dark:text-neutral-400">
                      Yes you can get a custom order for your supplies,you can create a custom order through contact us via email through: bullystick@elitetreatforpets.com or giving us a call on: +1(917) 6094-597 .
                    </p>
                  </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                  <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-600 dark:hover:text-neutral-300 dark:focus:text-neutral-800" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                    Do you supply Bully Sticks?
                    <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                  </button>
                  <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                    <p class="text-gray-600 dark:text-neutral-400">
                      Yes, after manufacturing our bully stick from Africa we supply it across the USA.
                    </p>
                  </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                  <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-600 dark:hover:text-neutral-300 dark:focus:text-neutral-800" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                    Which variations of Bully Sticks do you have?
                    <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                  </button>
                  <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                    <p class="text-gray-600 dark:text-neutral-400">
                      Yeah we have different variations of bully sticks,we have the 6 inch,12 inch and 24 inch bully sticks.
                    </p>
                  </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                  <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-600 dark:hover:text-neutral-300 dark:focus:text-neutral-800" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                    Is your Bully Sticks safe for my pet?
                    <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                  </button>
                  <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p class="text-gray-600 dark:text-neutral-400">
                      Our products are made from Organic,odourless Bully stick safe for your pet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tips Section */}


        {/* Contact Us section */}
        <div className="bg-gray-50 h-max lg:py-8 flex flex-col lg:flex-row lg:space-x-48 lg:pl-28 pl-2 py-4">
          <div className="sm:flex-col sm:space-y-4 space-y-2 mx-auto ">
            <div className="flex flex-row space-x-10">
              <Image
                src='/banktBs.png'
                alt="dog eating bully-stick"
                height={300}
                width={400}
                className="h-28 w-28 sm:h-36 sm:w-36 border-white border-2 "
                style={{ borderRadius: '48%' }}
              />
              <h2 className="sm:p-14 p-6 bg-amber-500 text-3xl text-white" style={{
                fontFamily: 'playfair_display'
              }}>Elite</h2>
            </div>
            <div className="flex flex-row space-x-4 ">
              <h2 className="sm:p-14 p-8 bg-amber-500 text-3xl text-white " style={{
                fontFamily: 'playfair_display'
              }}>Pets</h2>
              <Image
                src='/bankt_bs.png'
                alt="dog eating bully-stick"
                height={100}
                width={200}
                className="h-28 w-28 sm:h-36 sm:w-36 border-white border-2"
                style={{ borderRadius: '48%' }}
              />
            </div>
          </div>
          <div className="pb-10">
            <h3 className="text-4xl mb-23 sm:w-5/6 w-full mb-6  sm:text-9xl leading-tight sm:leading-7xl text-amber-700 font-bold" style={{
              fontFamily: 'playfair_display'
            }}>Best online pet product in your Area</h3>
            <h3 className="mt-2 mb-4 font-light text-xl sm:w-3/4 w-full sm:text-2xl " >Interested about us & and our products,we would like to hear more from you.</h3>
            <Link href='/contact'>
              <button className='rounded-full py-2 sm:px-6  border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-52 w-full' style={{ fontFamily: "poppins" }}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* Contact Us section */}
      </div>
    </>
  );
}



export default Home;
