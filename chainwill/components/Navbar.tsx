"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const navLinks = [
    { name: "Home", href: "/", width: "w-20" },
    { name: "How it Works", href: "/how-it-works", width: "w-[110px]" },
    { name: "Features", href: "/features", width: "w-20" },
    { name: "Help Center", href: "/help-center", width: "w-[110px]" },
    { name: "Community", href: "/community", width: "w-[110px]" },
  ];

  const baseLinkClass =
    "no-underline h-10 rounded-2xl inline-flex items-center justify-center";

  return (
    <div className="w-full flex justify-center pt-4">
      <div className="bg-black w-1/2 h-14 text-white flex items-center justify-center rounded-3xl">
        <div className="flex items-center justify-between w-3/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${baseLinkClass} ${link.width} ${
                pathName === link.href
                  ? "bg-black text-white outline"
                  : "bg-white text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}