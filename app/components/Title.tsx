import Image from "next/image";

const Title = () => {
  return (
    <div className="max-w-3xl">
      <div about="logo" className="p-2 m-5 flex justify-center">
        <Image src={"logo-full.svg"} alt="logo-full" width={180} height={200} />
      </div>
      <div className="flex flex-col gap-1 text-center">
        <span className="m-1 text-Neutral-300 text-3xl md:text-5xl lg:text-5xl p-1 font-extrabold">
          Your Journey to Coding Conf 2025 Starts Here!
        </span>
        <div className="flex text-Neutral-300/90 flex-col m-1 font-normal p-1 px-3">
          Secure your spot at next year&apos;s biggest coding conference.
        </div>
      </div>
    </div>
  );
};

export default Title;
