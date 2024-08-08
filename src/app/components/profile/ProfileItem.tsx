interface ProfileItemProps {
  title?: string;
  content?: string | null;
  children?: React.ReactNode;
  className?: string;
}

export default function ProfileItem({
  content,
  title,
  children,
  className,
}: ProfileItemProps) {
  return (
    <div className={"flex flex-col w-fit " + className}>
      {title && <div className="pt-1 text-gray-400 font-figtree">{title}</div>}
      {content && (
        <div className=" text-light-gray font-medium font-figtree">
          {content}
        </div>
      )}
      {children}
    </div>
  );
}
