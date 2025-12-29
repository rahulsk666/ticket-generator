import Image from "next/image";

type ticketProps = {
  name: string;
  email: string;
};

const Ticket = ({ name, email }: ticketProps) => {
  return (
    <div className="flex flex-col max-w-2xl min-h-screen items-center">
      <div about="logo" className="p-2 m-5 flex justify-center">
        <Image src={"logo-full.svg"} alt="logo-full" width={180} height={200} />
      </div>
      <div className="flex flex-col text-center mt-5 items-center">
        <span className="text-3xl md:text-5xl font-bold my-2">
          Congrats, <span className="text-Orange-500">{name}! </span>
          <br />
          Your ticket is ready.
        </span>
        <span className="text-Neutral-300/85 font-bold text-center text-sm md:text-lg my-2 max-w-md">
          We&apos;ve emailed your ticket to <br />{" "}
          <span className="text-Orange-500"> {email}</span> and will send
          updates in the <br /> run up to the event.
        </span>
      </div>
      <div>
        <Image
          src={"pattern-ticket.svg"}
          alt="pattern-ticket"
          width={200}
          height={200}
          className="w-75 h-75 md:w-120 md:h-100"
        />
      </div>
    </div>
  );
};

export default Ticket;
