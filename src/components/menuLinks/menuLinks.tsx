"use client";
import { FaHome } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const menuLinksHref = [
  {
    id: 1,
    href: "/",
    title: "Ana Sayfa",
    icon: <FaHome size={25} className="text-white" />,
  },
  {
    id: 2,
    href: "/resume",
    title: "Özgeçmiş",
    icon: <PiReadCvLogo size={25} className="text-white" />,
  },
  {
    id: 3,
    href: "/portfolio",
    title: "Projeler",
    icon: <MdOutlineWorkOutline size={25} className="text-white" />,
  },
  {
    id: 4,
    href: "/contact",
    title: "İletişim",
    icon: <RiContactsBook2Fill size={25} className="text-white" />,
  },
];

const MenuLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-end w-full absolute -top-28">
      <div className="border border-gray-400 mds:p-4 p-1 flex items-center gap-2 rounded-xl">
        {menuLinksHref.map((item) =>
          item.href && item.title ? (
            <Link key={item.id} href={item.href}>
              <button
                className={`py-2 px-2 rounded-xl text-white font-normal font-poppins flex flex-col items-center ${
                  pathname === item.href ? "color-hunt" : "bg-gray-300"
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </button>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MenuLinks;
