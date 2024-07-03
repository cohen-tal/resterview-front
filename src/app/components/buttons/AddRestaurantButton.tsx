import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Link from "next/link";

export default function AddRestaurantButton() {
  return (
    <Link className="fixed bottom-20 right-20" href={"/restaurants/new"}>
      <AddBusinessIcon fontSize="medium" />
    </Link>
  );
}
