export default function Step({ text }: { text: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center text-gray-800 w-full h-full p-3">
      <text className="z-10">{text}</text>
    </div>
  );
}
