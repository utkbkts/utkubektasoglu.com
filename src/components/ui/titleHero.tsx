import React from "react";

interface TitleHeroProps {
  title: string;
}

const TitleHero = ({ title }: TitleHeroProps) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <h1 className="font-bold mds:text-4xl text-xl uppercase font-raleway leading-2 whitespace-nowrap dark:text-white">
        {title}
      </h1>
      <span className="color-hunt h-[2px] w-full"></span>
    </div>
  );
};

export default TitleHero;
