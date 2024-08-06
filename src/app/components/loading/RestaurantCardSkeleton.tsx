import { Skeleton } from "@mui/material";

export default function RestaurantCardSkeleton() {
  const skeletonCards: JSX.Element[] = [];
  (() => {
    for (let i = 0; i < 8; i++) {
      skeletonCards.push(
        <div
          key={"skeletonCard" + i}
          className="flex flex-col w-full gap-2 p-1 place-items-center"
        >
          <Skeleton variant="rounded" width={"100%"} height={200} />
          <Skeleton width={"100%"} height={50} />
          <Skeleton width={"100%"} height={50} />
        </div>
      );
    }
  })();
  return skeletonCards;
}
