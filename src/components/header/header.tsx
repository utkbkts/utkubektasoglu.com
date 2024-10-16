"use client";

import { ModeToggle } from "./menu-toggle";
const Header = () => {
  return (
    <div className="container mx-auto mt-24 mb-[8rem]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl !font-raleway dark:text-white">
          Utku <span className="text-bgRed">Bektaşoğlu</span>
        </h1>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
