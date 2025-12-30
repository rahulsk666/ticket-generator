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
          className={`rounded-xl bg-Neutral-700/35 w-full h-11 hover:bg-Neutral-500/30 border ${
            error ? "border-Orange-700" : " border-Neutral-300"
          }`}
        />
      </div>
    </>
  );
};

export default FormInput;
