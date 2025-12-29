import Image from "next/image";
import { ChangeEvent } from "react";

interface inputTypes {
  id: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput = ({ id, name, value, handleChange, error }: inputTypes) => {
  return (
    <>
      <div className="flex flex-col">
        <input
          type="text"
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          className={`rounded bg-Neutral-700/20 w-full hover:bg-Neutral-500/20 border ${
            error ? "border-Orange-700" : " border-Neutral-300"
          }`}
        />
      </div>
    </>
  );
};

export default FormInput;
