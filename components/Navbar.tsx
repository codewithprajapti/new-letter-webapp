import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex md:gap-15 items-center px-4 md:px-20 py-2 bg-white">
        <div className="flex w-fit border-0">
          <Image src="/Logo.jpg" height={100} width={100} alt="NBC News Logo" />
        </div>
        <div className="hidden md:flex gap-10 text-3xl justify-between border-0">
          <Link href="/">Tesla</Link>
          <Link href="/about">US Business Headlines</Link>
          <Link href="/blog">TechCrunch</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
}
