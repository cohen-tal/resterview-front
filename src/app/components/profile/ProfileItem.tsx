interface ProfileItemProps {
  title?: string;
  content?: string | null;
  children?: React.ReactNode;
}

export default function ProfileItem({
  content,
  title,
  children,
}: ProfileItemProps) {
  return (
    <div className="profile-item flex flex-col flex-wrap content-center w-full">
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
