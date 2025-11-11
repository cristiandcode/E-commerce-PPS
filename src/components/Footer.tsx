import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Fashion Week" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            FASHION WEEK
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 Fashion Week</p>
        <p className="text-sm text-gray-400">Todos los derechos reservados</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Todos los productos</Link>
        <Link href="/">Nuevos ingresos</Link>
        <Link href="/">Productos seleccionados</Link>
        <Link href="/">Ofertas</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Acerca de nosotros</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Programa de afiliados</Link>
      </div>
    </div>
  );
};

export default Footer;
