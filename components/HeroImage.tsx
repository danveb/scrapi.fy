import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full h-full">
      <Image
        src="/assets/images/tokyo-night.jpg"
        alt="common ground"
        width={4000}
        height={2000}
        className="object-contain"
      />
    </div>
  )
}