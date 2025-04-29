import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function Button({ href, children, className = "", target }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`w-52 bg-gray-200 text-center 
        hover:bg-gray-300 hover:text-black 
        px-2 py-1 
        ${className}`}
    >
      <button>{children}</button>
    </Link>
  );
}
