import React from "react";
import Card from "./Card";

export default function SectionOne() {
  return (
    <div className="px-[5%] grid gap-[5em] landscape:grid-cols-2 landscape:w-[80%] landscape:mx-auto pb-[20%] landscape:pb-[10%]">
      <Card
        image="icon-access-anywhere.svg"
        heading="Access your files, anywhere"
        content="The ability to use a smartphone, tablet, or computer to access your
        account means your files follow you everywhere."
      />
      <Card
        image="icon-security.svg"
        heading="Security you can trust"
        content="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <Card
        image="icon-collaboration.svg"
        heading="Real-time collaboration"
        content="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />
      <Card
        image="icon-any-file.svg"
        heading="Store any type of file"
        content="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </div>
  );
}
