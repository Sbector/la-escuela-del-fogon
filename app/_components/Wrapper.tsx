import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="flex flex-col mt-16 w-screen h-[calc(100vh-4rem)] px-0">
      {children}
    </div>
  );
}