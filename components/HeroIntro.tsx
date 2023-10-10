import Image from "next/image";

const heroIntroImgs = [
  {
    id: 1, 
    src: "http://res.cloudinary.com/hbhhv9rz9/image/upload/v1662777895/Subscription%20/Icons/Subscription_Flexibility.svg",
    alt: "calendar", 
    title: "Change Anytime", 
    description: "Adjust to meet your schedule—skip, change, cancel, or pause your shipments anytime.",
  }, 
  {
    id: 2, 
    src: "http://res.cloudinary.com/hbhhv9rz9/image/upload/v1661439090/Subscription%20/Subscription_Curated.svg",
    alt: "globe", 
    title: "Carefully Curated", 
    description: "Our certified Q graders taste over 1000 coffees yearly from around the world, to ensure you drink only the best coffee.",
  }, 
]

export default function HeroIntro() {
  return (
    <section className="w-full h-full relative bg-cream py-16">
      <div className="flex flex-col gap-16 mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-sans tracking-widest uppercase text-xs xl:text-sm text-black">How It Works</h2>
        <h1 className="head__text">unleash the power of <span className="text-primary">scrapi.fy</span></h1>
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-2">
            {heroIntroImgs.map((image) => (
              <div className="pt-1 pb-1 flow-root px-1">
                <div className="-mt-2">
                  <div className="inline-flex items-center justify-center w-full">
                    <figure className="flex flex-col items-center h-full w-1/4">
                      <Image 
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </figure>
                  </div>
                  <h3 className="font-sans tracking-widest uppercase text-black text-xs mt-4 mb-4">{image.title}</h3>
                  <p className="font-serif text-black pt-1 text-xs mt-1 mb-1">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}