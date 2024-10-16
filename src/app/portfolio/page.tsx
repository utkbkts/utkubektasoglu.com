import { Metadata } from "next";
import React from "react";
import Dashboard from "../dashboard/page";
import PortfolioPage from "@/components/portfolioPage/portfolioPage";

export const metadata: Metadata = {
  title: "Utku Bektasoglu | Portfolyo",
};

const Portfolio = () => {
  return (
    <Dashboard>
      <PortfolioPage />
    </Dashboard>
  );
};

export default Portfolio;
