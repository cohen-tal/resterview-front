import { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-start min-h-screen">{children}</div>
  );
}
