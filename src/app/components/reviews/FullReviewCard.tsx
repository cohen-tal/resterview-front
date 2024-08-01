"use client";
import Image from "next/image";
import StarRatingInput from "../rating/StarRatingInput";
import { ReviewAPI } from "../../../../d";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import DropDownMenu from "../menus/DropDownMenu";
import { useSession } from "next-auth/react";
import { RiPencilFill } from "react-icons/ri";
import { useState } from "react";
import Modal from "../modal/Modal";
import EditReviewForm from "../forms/EditReviewForm";
import warningAnimation from "../../../../public/lottie/warning.json";
import Lottie from "react-lottie";
import fetchAPI from "@/utils/fetchUtil";

interface ReviewCardProps {
  review: ReviewAPI;
  isHistoryCard?: boolean;
  onEdit?: () => void;
}

export default function FullReviewCard({
  review,
  onEdit,
  isHistoryCard = false,
}: ReviewCardProps) {
  const { data: session } = useSession();
  const [editReview, setEditReview] = useState(false);
  const [deleteReview, setDeleteReview] = useState(false);

  async function handleDelete() {
    try {
      const res = await fetchAPI("/reviews", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.accessToken?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId: review.id,
          authorId: review.author.id,
        }),
      });
    } catch (err) {}
  }

  const isAuthor = session?.id === review.author.id ?? true;

  return (
    <>
      <div
        className={`relative flex flex-col justify-center min-h-fit w-full rounded-xl gap-2 p-6 border font-figtree ${
          isHistoryCard ? "shadow-sm" : "shadow-md"
        }`}
      >
        {isAuthor && (
          <DropDownMenu>
            <button
              className="w-full flex place-items-center p-2 gap-1 hover:bg-gray-100"
              onClick={() => {
                setEditReview((prev) => !prev);
              }}
            >
              Edit review
              <RiPencilFill />
            </button>
            <button
              className="w-full flex place-items-center p-2 gap-2 hover:bg-gray-100"
              onClick={() => {
                setDeleteReview(true);
              }}
            >
              Delete review
              <MdDelete />
            </button>
          </DropDownMenu>
        )}
        <div
          className={`flex place-items-center gap-2 ${
            isHistoryCard && "order-1"
          }`}
        >
          {!isHistoryCard && (
            <div className="relative rounded-full w-12 h-12 overflow-hidden shadow-md">
              <Image
                src={review.author.image ?? "/landing-plate.png"}
                alt="avatar"
                fill
                style={{ objectFit: "cover", zIndex: 999 }}
              />
            </div>
          )}
          <div>
            {!isHistoryCard && review.author.name}
            <div className="flex place-items-center text-sm text-gray-400 gap-2">
              <div className="flex place-items-center gap-0.5">
                <AiOutlineLike />
                {review.likes ?? 0}
              </div>
              <div className="flex place-items-center gap-0.5">
                <AiOutlineDislike />
                {review.dislikes ?? 0}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-between gap-4 ${
            isHistoryCard ? "pt-2" : "border-t pt-4"
          }`}
        >
          <StarRatingInput
            ratingType="stars"
            readOnly={true}
            fontSize="1.25rem"
            defaultValue={review.rating}
          />
          <div className="text-sm text-gray-400">
            {new Date(review.dateAdded).toLocaleDateString()}
          </div>
        </div>
        <p className="text-md break-words text-light-gray max-w-[90%]">
          {review.text}
        </p>
        {!isAuthor && (
          <div className="flex place-items-center lg:place-content-start gap-4">
            <button className="flex place-items-center gap-1 border rounded-full text-gray-500 p-2">
              <AiOutlineLike />
              Helpful
            </button>
            <button className="flex place-items-center gap-1 border rounded-full text-gray-500 p-2">
              <AiOutlineDislike />
              Not helpful
            </button>
          </div>
        )}
      </div>
      <Modal
        isOpen={editReview}
        onClose={() => {
          setEditReview(false);
        }}
      >
        <EditReviewForm
          id={review.id}
          rating={review.rating}
          text={review.text}
          images={review.images}
          onSubmitSuccessful={() => {
            setEditReview(false);
            onEdit?.();
          }}
        />
      </Modal>
      <Modal
        isOpen={deleteReview}
        onClose={() => {
          setDeleteReview(false);
        }}
      >
        <div className="p-6">
          <Lottie
            options={{
              animationData: warningAnimation,
              loop: true,
              autoplay: true,
            }}
            width="100%"
            height={220}
          />
          <h2 className="text-3xl text-center p-2">Are you sure?</h2>
          <div className="flex place-items-center gap-2 p-2">
            <button
              className="w-full border rounded-lg p-1 bg-red-300"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              className="w-full border rounded-lg p-1 bg-slate-100"
              onClick={() => {
                setDeleteReview(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
