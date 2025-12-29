"use client";
import { useState } from "react";
import Form from "./Form";
import Title from "./Title";
import { TicketData } from "../Types/Ticket";
import { Errors } from "../Types/FormErrors";
import Ticket from "./Ticket";
import dynamic from "next/dynamic";

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

  // const DynamicTicket = dynamic(() => import("./Ticket"));

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
    console.log(data);
    setTicket(true);
    // clearForm();
  };

  // const clearForm = () => {
  //   setData(() => ({
  //     avatar: null,
  //     preview: "",
  //     name: "",
  //     email: "",
  //     github: "",
  //   }));
  // };
  return (
    <>
      {ticket ? (
        <Ticket name={data.name} email={data.email} />
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
