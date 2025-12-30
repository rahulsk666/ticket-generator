"use client";
import Image from "next/image";
import FileUploader from "./FileUploader";
import FormInput from "./FormInput";
import { ChangeEvent, MouseEventHandler } from "react";
import { TicketData } from "../Types/Ticket";
import { Errors } from "../Types/FormErrors";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png"];
const MAX_IMAGE_SIZE = 500 * 1024;

type FormProps = {
  data: TicketData;
  errors: Errors;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  setData: React.Dispatch<React.SetStateAction<TicketData>>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
};

const Form = ({
  data,
  setData,
  errors,
  setErrors,
  handleSubmit,
}: FormProps) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    validateAndUpdateFile(file);
  };

  const handleDropImage = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];

    if (!file) {
      return;
    }
    validateAndUpdateFile(file);
  };

  const validateAndUpdateFile = (file: File) => {
    let error = "";
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      error = "Only jpg and png is supported";
    } else if (file.size > MAX_IMAGE_SIZE) {
      error = "Image must be under 500kb";
    }

    setErrors((prev) => ({ ...prev, avatar: error }));

    if (!error) {
      setData((prev) => ({
        ...prev,
        avatar: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData((prev) => ({ ...prev, name: value }));

    let error = "";
    if (!value && value == "") {
      error = "Name is required";
    } else if (value.length < 3) {
      error = "Name should have a minimum of three characters";
    }
    setErrors((prev) => ({ ...prev, name: error }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData((prev) => ({ ...prev, email: value }));

    let error = "";
    if (!value && value == "") {
      error = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Email is invalid";
    }
    setErrors((prev) => ({ ...prev, email: error }));
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData((prev) => ({ ...prev, github: value }));

    let error = "";
    if (!value && value == "") {
      error = "Github username is required";
    }
    setErrors((prev) => ({ ...prev, github: error }));
  };

  const handleRemoveImage = () => {
    if (data.preview) {
      URL.revokeObjectURL(data.preview);
    }
    setData((prev) => ({ ...prev, avatar: null, preview: null }));
    setErrors((prev) => ({ ...prev, avatar: "" }));
  };

  return (
    <form>
      <div className="flex flex-col justify-center space-y-2 items-center mt-3 w-full">
        <div className="flex flex-col space-y-2 md:w-100">
          <label htmlFor="avatar" className="text-lg font-semibold">
            Upload Avatar
          </label>
          <FileUploader
            preview={data.preview}
            handleImageChange={handleImageChange}
            handleRemoveImage={handleRemoveImage}
            handleDropImage={handleDropImage}
          />
          <div>
            <div className="text-xs flex flex-row gap-2 text-neutral-300/80">
              <Image src={"/icon-info.svg"} alt="icon" width={10} height={10} />
              {errors && errors.avatar ? (
                <span className="text-Orange-700">{errors.avatar}</span>
              ) : (
                <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2.5 my-2 w-77 md:w-100">
          <label htmlFor="name" className="text-lg font-semibold">
            Full Name
          </label>
          <FormInput
            id={"name"}
            name={"name"}
            value={data.name}
            handleChange={handleNameChange}
            error={errors.name}
          />
          {errors && errors.name && (
            <div className="text-xs flex flex-row gap-2 text-Orange-700">
              <Image
                src={"/icon-info.svg"}
                alt="icon"
                width={10}
                height={10}
                className="fill-Orange-500"
              />
              {errors.name}
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-2.5 my-2 w-77 md:w-100">
          <label htmlFor="email" className="text-lg font-semibold">
            Email Address
          </label>
          <FormInput
            id={"email"}
            name={"email"}
            value={data.email}
            placeholder={"example@email.com"}
            handleChange={handleEmailChange}
            error={errors.email}
          />
          {errors && errors.email && (
            <div className="text-xs flex flex-row gap-2 text-Orange-700">
              <Image
                src={"/icon-info.svg"}
                alt="icon"
                width={10}
                height={10}
                className="fill-Orange-500"
              />
              {errors.email}
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-2.5 my-2 w-77 md:w-100">
          <label htmlFor="github" className="text-lg font-semibold">
            Github Username
          </label>
          <FormInput
            id={"github"}
            name={"github"}
            value={data.github}
            placeholder={"@yourusername"}
            handleChange={handleGithubChange}
            error={errors.github}
          />
          {errors && errors.github && (
            <div className="text-xs flex flex-row gap-2 text-Orange-700">
              <Image
                src={"/icon-info.svg"}
                alt="icon"
                width={10}
                height={10}
                className="fill-Orange-500"
              />
              {errors.github}
            </div>
          )}
        </div>
        <div className="flex flex-col mt-5 my-2 rounded-lg text-center w-77 md:w-100">
          <button
            type="button"
            // disabled={}
            className="w-full rounded-lg p-2 text-lg text-Neutral-900 font-black bg-Orange-700 hover:bg-Orange-500"
            onClick={handleSubmit}
          >
            Generate My Ticket
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
