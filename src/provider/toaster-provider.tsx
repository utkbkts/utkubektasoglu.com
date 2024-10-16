"use client";
import { Fragment } from "react";
import { Toaster } from "sonner";

const ToasterProvider = () => {
  return (
    <Fragment>
      <Toaster richColors />
    </Fragment>
  );
};

export default ToasterProvider;
