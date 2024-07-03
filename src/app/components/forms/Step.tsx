export default function Step({ text }: { text: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center text-gray-800 w-full h-full p-3">
      <p className="font-roboto z-10">{text}</p>
    </div>
  );
}
