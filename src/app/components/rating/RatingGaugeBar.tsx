interface RatingGaugeBarProps {
  fill: number;
  text: string;
  color: "emerald" | "red" | "green" | "orange" | "yellow";
}

export default function RatingGaugeBar({
  fill,
  text,
  color,
}: RatingGaugeBarProps) {
  const width = `${fill * 100}%`;
  const colors = {
    emerald: "bg-emerald-300",
    red: "bg-red-300",
    green: "bg-green-300",
    orange: "bg-orange-300",
    yellow: "bg-yellow-300",
  };

  return (
    <div className="w-full h-3 bg-gray-200 rounded-full">
      <div
        style={{ width }}
        className={`h-full rounded-full ${colors[color]}`}
      />
    </div>
  );
}
