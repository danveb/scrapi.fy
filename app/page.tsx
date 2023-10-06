import HeroIntro from "@/components/HeroIntro";
import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <>
      <HeroImage />
      <HeroIntro />
      <section className="px-6 border-2 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small__text">Latest Shopping Tool To Track Prices:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head__text">unleash the power of <span className="text-primary">scrapi.fy</span></h1>
            <p className="mt-6">Powerful, self-serve product and growth analyrics to help you convert, engage, and retain more.</p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="trending__section">
        <h2 className="section__text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Apple iPhone", "Book", "Nike Air Jordan"].map((product) => (
            <div>
              {product}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
