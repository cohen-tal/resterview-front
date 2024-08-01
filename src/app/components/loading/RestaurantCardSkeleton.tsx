import { Skeleton } from "@mui/material";

export default function RestaurantCardSkeleton() {
  return (
    <>
      {new Array(6).fill(1).map((_, index) => (
        <div
          key={"skeletonCard" + index}
          className="hidden lg:flex flex-col w-full gap-2 p-1 place-items-center"
        >
          <Skeleton variant="rounded" width={"100%"} height={200} />
          <Skeleton width={"100%"} height={50} />
          <Skeleton width={"100%"} height={50} />
        </div>
      ))}
      {new Array(2).fill(1).map((_, index) => (
        <div
          key={"skeletonCard" + index}
          className="flex lg:hidden flex-col w-full gap-2 p-1 place-items-center"
        >
          <Skeleton variant="rounded" width={"100%"} height={200} />
          <Skeleton width={"100%"} height={50} />
          <Skeleton width={"100%"} height={50} />
        </div>
      ))}
    </>
  );
}
