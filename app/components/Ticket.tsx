/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { TicketData } from "../Types/Ticket";

type ticketProps = {
  data: TicketData;
};

const Ticket = ({ data }: ticketProps) => {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="flex flex-col max-w-2xl min-h-screen items-center">
      <div about="logo" className="p-2 m-5 flex justify-center">
        <Image src={"logo-full.svg"} alt="logo-full" width={180} height={200} />
      </div>
      <div className="flex flex-col text-center mt-5 items-center gap-2">
        <span className="text-3xl md:text-5xl font-bold my-2">
          Congrats,
          <span className="bg-clip-text text-transparent font-bold bg-linear-to-r from-Orange-500 from-10% to-Neutral-300">
            {data.name}!
          </span>
          <br />
          Your ticket is ready.
        </span>
        <span className="text-Neutral-300/85 font-bold text-center text-sm md:text-lg my-2 max-w-md">
          We&apos;ve emailed your ticket to <br />
          <span className="text-Orange-500"> {data.email}</span> and will send
          updates in the <br /> run up to the event.
        </span>
      </div>
      <div className="mt-10 relative max-h-fit">
        <img
          src={"pattern-ticket.svg"}
          alt="pattern-ticket"
          className="w-75 md:w-120 -z-10"
        />
        <div className="z-10 absolute top-3 left-3 md:top-5 md:left-5 flex flex-row gap-3">
          <Image
            src={"logo-mark.svg"}
            alt="logo-mark"
            width={10}
            height={10}
            className="w-5 md:w-8"
          />
        </div>
        <div className="absolute top-1 left-11 md:top-4 md:left-16">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="text-lg md:text-4xl font-bold">Coding Conf</span>
            <span className="text-xs md:text-sm text-Neutral-300/85">
              {currentDate} / Austin, TX
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-5 left-3 md:left-5 flex flex-row gap-3">
          <Image
            src={"/images/image-avatar.jpg"}
            alt="logo-mark"
            width={100}
            height={100}
            className="w-10 md:w-20"
          />
        </div>
        <div className="absolute bottom-3.5 left-15 md:bottom-6 md:left-30">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="text-lg md:text-2xl text-Neutral-300 font-bold">
              {data.name}
            </span>
            <div className="flex flex-row text-xs md:text-sm text-Neutral-300/85 gap-1">
              <Image
                src={"icon-github.svg"}
                alt="icon-github"
                width={10}
                height={10}
                className="w-3 md:w-4"
              />
              <span>@{data.github}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-3 md:top-18 md:right-6">
          <span className="[writing-mode:vertical-rl] md:text-2xl text-Neutral-300/50 font-bold">
            #126276
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
