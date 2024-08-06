interface ProfileSectionProps {
  title?: string;
  className?: String;
  children?: React.ReactNode;
}

export default function ProfileSection({
  children,
  title,
  className = "",
}: ProfileSectionProps) {
  return (
    <div
      className={`flex flex-col w-full px-4 pt-3 pb-5 border rounded-lg ${className}`}
    >
      {title && (
        <div className="font-figtree text-light-gray font-semibold text-lg pb-3">
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
