import {
  ReactNode,
  CSSProperties,
  useState,
  useRef,
  MutableRefObject,
} from "react";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";

interface RatingIconWrapperProps {
  valueRange: number;
  defaultValue?: number | null;
  precision?: 0.5 | 1;
  style?: CSSProperties;
  onClick: (value: number) => void;
  onHover: (value: number) => void;
  children?: ReactNode;
}

export default function RatingIconWrapper({
  onClick,
  onHover,
  style,
  children,
  precision = 1,
  valueRange,
  defaultValue = null,
}: RatingIconWrapperProps) {
  const [value, setValue] = useState<number | null>(defaultValue);
  const val = useRef(0);
  return (
    <button
      className="hover:scale-150"
      onMouseMove={(e) => {
        const x = e.clientX;
        const rectLeft = e.currentTarget.getBoundingClientRect().left;
        const rectCenter = e.currentTarget.getBoundingClientRect().width / 2;

        if (x - rectLeft <= rectCenter) {
          setValue(valueRange - 0.5);
          onHover?.(valueRange - 0.5);
        } else {
          setValue(valueRange);
          onHover?.(valueRange);
        }
      }}
      onClick={() => {
        onClick?.(value!);
      }}
      onMouseLeave={() => {
        setValue(null);
      }}
    >
      {value === null ? (
        <PiStarFill style={{ width: "1.5rem", height: "1.5rem" }} />
      ) : value === valueRange - 0.5 ? (
        <PiStarHalfFill
          style={{ width: "1.5rem", height: "1.5rem", color: "red" }}
        />
      ) : (
        <PiStarFill
          style={{ width: "1.5rem", height: "1.5rem", color: "red" }}
        />
      )}
    </button>
  );
}
