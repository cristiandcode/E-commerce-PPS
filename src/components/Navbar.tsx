import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Fashion Week"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md font-medium tracking-wider">FASHION WEEK</p>
      </Link>
      {/* right */}
      <div className="">Right</div>
    </nav>
  );
};

export default Navbar;
