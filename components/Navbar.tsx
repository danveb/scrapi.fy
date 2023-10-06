import Image from "next/image";
import Link from "next/link";

const navIcons = [
  {
    id: 1, 
    src: "/assets/icons/search.svg", 
    alt: "search", 
  },
  {
    id: 2, 
    src: "/assets/icons/black-heart.svg", 
    alt: "heart", 
  },
  {
    id: 3, 
    src: "/assets/icons/user.svg", 
    alt: "user", 
  },
]; 

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p className="nav__logo">
            scrapi<span className="text-primary">.fy</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.id}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28} 
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  )
}