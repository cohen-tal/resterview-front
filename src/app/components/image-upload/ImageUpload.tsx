import { useRef, ChangeEvent } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PreviewImage from "./PreviewImage";

interface ImageUploadProps {
  value?: File[];
  error?: string;
  onChange: (files: File[]) => void;
}

export default function ImageUpload({
  value = [],
  error,
  onChange,
}: ImageUploadProps) {
  const ref = useRef<HTMLInputElement>(null);

  function handleUpload(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    onChange([...value, ...files]);
  }

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div
        className="flex flex-col items-center justify-center w-full border border-dashed hover:cursor-pointer transition-all duration-300 flex-1"
        onClick={() => ref.current?.click()}
      >
        <div className="flex flex-col place-items-center gap-2">
          <UploadFileIcon fontSize="large" />
          <label
            className={`${error ? "text-red-400" : ""}`}
            htmlFor="image_uploads"
          >
            {error ? error : "Drag or Drop image files."}
          </label>
        </div>
      </div>
      <input
        name="image_uploads"
        type="file"
        multiple
        accept="image/*"
        hidden
        ref={ref}
        onChange={handleUpload}
      />
      <div className="flex-1 w-full grid gap-10 p-3 grid-cols-3 justify-items-center">
        {value.map((image, index) => (
          <PreviewImage
            key={image.name}
            image={image}
            size={image.size}
            onDelete={() => {
              const newFiles = [...value];
              newFiles.splice(index, 1);
              onChange(newFiles);
            }}
          />
        ))}
      </div>
    </div>
  );
}
