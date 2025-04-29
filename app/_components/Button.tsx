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
      className={`inline-block px-8 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-colors uppercase text-sm tracking-wider 
        ${className}`}
    >
      <button>{children}</button>
    </Link>
  );
}
