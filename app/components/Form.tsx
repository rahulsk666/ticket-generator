"use client";
import Image from "next/image";
import FileUploader from "./FileUploader";
import FormInput from "./FormInput";
import { ChangeEvent, useState } from "react";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png"];
const MAX_IMAGE_SIZE = 500 * 1024;

type Errors = {
  avatar?: string;
  name?: string;
  email?: string;
  github?: string;
};

const Form = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  const [errors, setErrors] = useState<Errors>({});

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    let error = "";
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      error = "Only jpg and png is supported";
    } else if (file.size > MAX_IMAGE_SIZE) {
      error = "Image must be under 500kb";
    }

    setErrors((prev) => ({ ...prev, avatar: error }));

    if (!error) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    let error = "";
    if (!value && value == "") {
      console.log(1);

      error = "Name is required";
    }
    setErrors((prev) => ({ ...prev, name: error }));
    console.log(errors.name);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

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
    setGithub(value);

    let error = "";
    if (!value && value == "") {
      error = "Github username is required";
    }
    setErrors((prev) => ({ ...prev, github: error }));
  };

  const handleRemoveImage = () => {
    setAvatar(null);
    setPreview(null);
    setErrors((prev) => ({ ...prev, avatar: "" }));
  };

  const clearForm = () => {
    setAvatar(null);
    setPreview(null);
    setEmail("");
    setName("");
    setGithub("");
  };

  const isFormValid =
    avatar &&
    preview &&
    !errors.avatar &&
    !errors.name &&
    !errors.email &&
    !errors.github &&
    name &&
    email &&
    github;

  const handleSubmit = () => {
    if (!isFormValid) {
      return;
    }
    console.log({ avatar, email, name, github });
    clearForm();
  };
  return (
    <form>
      <div className="flex flex-col justify-center space-y-2 items-center mt-3 w-full">
        <div className="flex flex-col space-y-2 md:w-100">
          <label htmlFor="avatar" className="text-lg font-semibold">
            Upload Avatar
          </label>
          <FileUploader
            preview={preview}
            handleImageChange={handleImageChange}
            handleRemoveImage={handleRemoveImage}
          />
          <div>
            <div className="text-xs flex flex-row gap-2 text-neutral-300">
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
            value={name}
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
            value={email}
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
            value={github}
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
        <div className="flex flex-col mt-5 my-2 rounded text-center w-77 md:w-100">
          <button
            type="button"
            disabled={!isFormValid}
            className="w-full rounded bg-Orange-700 hover:bg-Orange-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
