"use client"

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel"; 

const heroImages = [
  {
    id: 1, 
    imgUrl: "/assets/images/hero-1.svg", 
    alt: "smart watch", 
  },
  {
    id: 2, 
    imgUrl: "/assets/images/hero-2.svg", 
    alt: "bag", 
  },
  {
    id: 3, 
    imgUrl: "/assets/images/hero-3.svg", 
    alt: "lamp", 
  },
  {
    id: 4, 
    imgUrl: "/assets/images/hero-4.svg", 
    alt: "air fryer", 
  },
  {
    id: 5, 
    imgUrl: "/assets/images/hero-5.svg", 
    alt: "chair", 
  },
];

export default function HeroCarousel() {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false} 
        showStatus={false} 
      >
        {heroImages.map((image) => (
          <Image 
            key={image.id}
            src={image.imgUrl}
            alt={image.alt}
            width={480}
            height={480}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image 
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}