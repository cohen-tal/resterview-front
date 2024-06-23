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
    <div className="w-full border-b">
      <p className="pl-4 text-xl font-roboto font-medium text-light-gray">
        {sectionTitle}
      </p>
      <div className="p-1">{children}</div>
    </div>
  );
}
