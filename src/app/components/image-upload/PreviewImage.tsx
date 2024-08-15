import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useMemo } from "react";
import { IoClose } from "react-icons/io5";

interface PreviewImageProps {
  image: File;
  size: number;
  onDelete: () => void;
}

function PreviewImage({ image, size, onDelete }: PreviewImageProps) {
  const src = useMemo(() => URL.createObjectURL(image), [image]);

  return (
    <motion.div
      className={`flex flex-col items-center justify-center w-28 lg:w-full h-32 border-4 ${
        size > 5000000 ? "border-red-600" : ""
      } shadow`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
    >
      <div className="relative w-full h-32">
        <Image
          src={src}
          alt="image_preview"
          fill
          style={{ objectFit: "cover" }}
        />
        <button
          type="button"
          className="absolute -top-2 -right-2 rounded-full bg-red-400 text-white font-semibold font-roboto"
          onClick={onDelete}
        >
          <IoClose size={24} />
        </button>
      </div>
    </motion.div>
  );
}

export default memo(PreviewImage);
