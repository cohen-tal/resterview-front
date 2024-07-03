interface FilterMenuSectionProps {
  sectionTitle: string;
  children?: React.ReactNode;
}
export default function FilterMenuSection({
  sectionTitle,
  children,
}: FilterMenuSectionProps) {
  return (
    <div className="after:border-b after:block after:mt-2">
      <div className="p-6">
        <div className="text-2xl font-semibold text-light-gray">
          {sectionTitle}
        </div>
        <div className="pt-3">{children}</div>
      </div>
    </div>
  );
}
