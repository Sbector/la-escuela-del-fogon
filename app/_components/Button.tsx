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
      className={`w-auto bg-gray-200 
        hover:bg-gray-500 hover:text-black 
        px-2 py-1 
        ${className}`}
    >
      <button>{children}</button>
    </Link>
  );
}
