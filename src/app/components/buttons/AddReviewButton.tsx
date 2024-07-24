import Link from "next/link";
import { User } from "../../../../d";

interface AddReviewButtonProps {
  restaurantId: string;
}

export default function AddReviewButton({
  restaurantId,
}: AddReviewButtonProps) {
  return (
    <Link className="" href={`/reviews/writereview/${restaurantId}`}></Link>
  );
}
