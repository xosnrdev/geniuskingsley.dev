import { ReactNode } from "react";

export interface WorkProps {
  children: ReactNode;
  progress: number;
}

export function WorkRight({ children, progress }: WorkProps) {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex flex-1 justify-center lg:items-center"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="p-2 md:px-0 lg:p-4">{children}</div>
    </div>
  );
}
