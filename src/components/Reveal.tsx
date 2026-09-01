"use client";
import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-6 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
