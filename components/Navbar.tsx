import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <>
      <div className="flex md:gap-15 justify-between items-center px-4 md:px-20 py-2 bg-white">
        <Link href="/" className="flex w-fit border-0">
          <Image src="/Logo.jpg" height={100} width={100} alt="NBC News Logo" />
        </Link>
        <div className="hidden md:flex gap-10 text-3xl justify-between border-0">
          <Link href="/">Tesla</Link>
          <Link href="/usBusiness">US Business Headlines</Link>
          <Link href="/techCrunch">TechCrunch</Link>
          <Link href="/wallStreet">Wall Street Journal</Link>
        </div>
        <HamburgerMenu />
      </div>
    </>
  );
}
