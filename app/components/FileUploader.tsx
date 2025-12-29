import Image from "next/image";
import { ChangeEvent, MouseEventHandler, useRef } from "react";

type FileUploaderProps = {
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  preview?: string | null;
  handleRemoveImage: MouseEventHandler<HTMLButtonElement>;
};

const FileUploader = ({
  handleImageChange,
  preview,
  handleRemoveImage,
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
          <div className="flex flex-col border-dashed rounded border bg-Neutral-700/20 border-neutral-300 w-full justify-center items-center min-h-30">
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
            className="border-dashed rounded border border-neutral-300 bg-Neutral-700/20 w-full min-h-30 relative cursor-pointer"
            onClick={openFileDialog}
          >
            <div className="flex flex-col text-neutral-300 items-center p-2 mt-6 space-y-3 pointer-events-none cursor-pointer">
              <div className="border rounded p-1">
                <Image
                  src={"/icon-upload.svg"}
                  alt="upload"
                  width={30}
                  height={30}
                />
              </div>
              <span className="text-sm">Drag and drop or click to upload</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FileUploader;
