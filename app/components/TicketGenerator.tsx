"use client";
import { useState } from "react";
import Form from "./Form";
import Title from "./Title";
import { TicketData } from "../Types/Ticket";
import { Errors } from "../Types/FormErrors";
import Ticket from "./Ticket";

const TicketGenerator = () => {
  const [data, setData] = useState<TicketData>({
    avatar: null,
    preview: "",
    name: "",
    email: "",
    github: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [ticket, setTicket] = useState<boolean>(false);

  const isFormValid =
    data.avatar &&
    data.preview &&
    !errors.avatar &&
    !errors.name &&
    !errors.email &&
    !errors.github &&
    data.name &&
    data.email &&
    data.github;

  const handleSubmit = () => {
    if (!isFormValid) {
      return;
    }
    setTicket(true);
  };

  return (
    <>
      {ticket ? (
        <Ticket data={data} />
      ) : (
        <>
          <Title />
          <Form
            data={data}
            setData={setData}
            errors={errors}
            setErrors={setErrors}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </>
  );
};

export default TicketGenerator;
