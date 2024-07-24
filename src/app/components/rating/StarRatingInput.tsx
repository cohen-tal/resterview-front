import Rating from "@mui/material/Rating";
import { useState } from "react";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import { styled } from "@mui/material/styles";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#86efac",
  },
  "& .MuiRating-iconHover": {
    color: "#86efac",
  },
  "& .MuiRating-iconEmpty": {
    color: "#ccc",
  },
});

const StylesPriceRating = styled(Rating)({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: "#ccc",
  },
});

const dollarIcons: {
  [index: number]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <AttachMoneyIcon color="success" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <AttachMoneyIcon color="warning" />,
    label: "Neutral",
  },
  3: {
    icon: <AttachMoneyIcon color="error" />,
    label: "Very Satisfied",
  },
};

function IconContainerStars({ value, ...props }: { value: number }) {
  if (value === 0.5) {
    return <PiStarHalfFill {...props} />;
  }
  return <PiStarFill {...props} />;
}

function IconContainerPrice({ value, ...props }: { value: number }) {
  return (
    <span {...props} style={{ color: "green" }}>
      {dollarIcons[value].icon}
      {dollarIcons[value].icon}
    </span>
  );
}

interface StarRatingInputProps {
  ratingType: "stars" | "price";
  readOnly?: boolean;
  precision?: number;
  defaultValue?: number;
  size?: "small" | "medium" | "large";
  fontSize?: string;
  getValue?: (value: number) => void;
}

export default function StarRatingInput({
  ratingType: rating,
  readOnly = false,
  precision = 1,
  defaultValue = 0,
  size = "medium",
  fontSize,
  getValue,
}: StarRatingInputProps) {
  const [value, setValue] = useState<number>(defaultValue);
  if (rating === "price") {
    return (
      <StylesPriceRating
        name="price-rating"
        value={value}
        defaultValue={defaultValue}
        max={3}
        size={size}
        readOnly={readOnly}
        IconContainerComponent={IconContainerPrice}
        emptyIcon={<AttachMoneyIcon style={{ opacity: 0.3 }} />}
        onChange={(event, newValue) => {
          setValue(newValue ?? 0);
          getValue?.(newValue ?? 0);
        }}
        highlightSelectedOnly
      />
    );
  }

  return (
    <StyledRating
      name="hover-feedback"
      value={value}
      precision={precision}
      onChange={(event, newValue) => {
        setValue(newValue ?? 0);
        getValue?.(newValue ?? 0);
      }}
      defaultValue={defaultValue}
      readOnly={readOnly}
      sx={{ fontSize }}
      IconContainerComponent={IconContainerStars}
      emptyIcon={<AttachMoneyIcon style={{ opacity: 0.3 }} />}
    />
  );
}
