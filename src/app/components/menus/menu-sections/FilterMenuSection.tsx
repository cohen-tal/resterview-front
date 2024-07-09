interface FilterMenuSectionProps {
  sectionTitle: string;
  children?: React.ReactNode;
}
export default function FilterMenuSection({
  sectionTitle,
  children,
}: FilterMenuSectionProps) {
  return (
    <div className="before:border-b before:block overflow-hidden">
      <div className="p-6">
        <div className="text-2xl font-semibold text-light-gray">
          {sectionTitle}
        </div>
        <div className="pt-3">{children}</div>
      </div>
    </div>
  );
}
