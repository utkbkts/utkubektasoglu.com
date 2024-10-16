import { Metadata } from "next";
import React from "react";
import Dashboard from "../dashboard/page";
import ContactPage from "@/components/contactPage/contactPage";

export const metadata: Metadata = {
  title: "Utku Bektasoglu | İletişim",
};

const Contact = () => {
  return (
    <Dashboard>
      <ContactPage />
    </Dashboard>
  );
};

export default Contact;
