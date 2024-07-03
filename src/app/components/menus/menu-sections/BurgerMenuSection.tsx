import { ReactNode } from "react";

interface BurgerMenuSectionProps {
  sectionTitle: string;
  children?: ReactNode;
}

export default function BurgerMenuSection({
  sectionTitle,
  children,
}: BurgerMenuSectionProps) {
  return (
    <div>
      <p className="pl-2 mb-4 text-3xl font-figtree font-semibold text-light-gray">
        {sectionTitle}
      </p>
      <div className="flex flex-col gap-2 mb-2 p-1">{children}</div>
    </div>
  );
}
