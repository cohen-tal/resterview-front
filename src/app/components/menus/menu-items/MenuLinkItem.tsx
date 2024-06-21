import Link from "next/link";

interface LinkItemProps {
  text: string;
  href: string;
}

export default function MenuLinkItem({ text, href }: LinkItemProps) {
  return (
    <Link
      className="text-light-gray font-roboto text-shadow hover:cursor-pointer hover:bg-gray-700 hover:text-white hover:ease-in-out duration-200 px-3 py-2 rounded-full font-medium"
      href={href}
    >
      {text}
    </Link>
  );
}
