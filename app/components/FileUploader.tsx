import Image from "next/image";
import { ChangeEvent, MouseEventHandler, useRef } from "react";

type FileUploaderProps = {
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  preview?: string | null;
  handleRemoveImage: MouseEventHandler<HTMLButtonElement>;
  handleDropImage: (e: React.DragEvent<HTMLDivElement>) => void;
};

const FileUploader = ({
  handleImageChange,
  preview,
  handleRemoveImage,
  handleDropImage,
}: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current?.click();
    }
  };
  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        name="avatar"
        id="avatar"
        accept="image/png, image/jpeg"
        onChange={handleImageChange}
        className="hidden"
      />
      {preview ? (
        <>
          <div className="flex flex-col border-dashed rounded-2xl border bg-Neutral-700/35 border-neutral-300 w-full justify-center items-center min-h-30">
            <Image
              src={"/images/image-avatar.jpg"}
              alt="Avatar preview"
              width={50}
              height={50}
              className="mt-2 rounded border border-Neutral-300"
            />
            <div className="flex flex-row text-xs gap-2.5 mt-2">
              <button
                type="button"
                className="bg-Neutral-700 hover:underline p-1 cursor-pointer"
                onClick={handleRemoveImage}
              >
                Remove Image
              </button>
              <button
                type="button"
                className="bg-Neutral-700 hover:underline p-1 cursor-pointer"
                onClick={openFileDialog}
              >
                Change Image
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="border-dashed rounded-2xl border border-neutral-300 bg-Neutral-700/35 w-full min-h-30 relative cursor-pointer"
            onClick={openFileDialog}
            onDrop={handleDropImage}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex flex-col text-neutral-300 items-center p-2 mt-2 space-y-5 pointer-events-none cursor-pointer">
              <div className="border border-Neutral-700 rounded-xl p-2 bg-Neutral-700/50">
                <Image
                  src={"/icon-upload.svg"}
                  alt="upload"
                  width={25}
                  height={25}
                />
              </div>
              <span className="text-base text-Neutral-300/90">
                Drag and drop or click to upload
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FileUploader;
