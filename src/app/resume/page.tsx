import { Metadata } from "next";
import React from "react";
import ResumeComp from "@/components/resumePage/resumePage";
import Dashboard from "../dashboard/page";

export const metadata: Metadata = {
  title: "Utku Bektasoglu | Özgeçmiş",
};

const ResumePage = () => {
  return (
    <Dashboard>
      <ResumeComp />
    </Dashboard>
  );
};

export default ResumePage;
