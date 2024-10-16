import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="flex dark:text-white flex-col gap-4  items-center justify-center pb-4">
        <div className="-m-[60px]">
          <Image
            src="/ben.jpg"
            alt="ben"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
        <div className="pt-12 flex flex-col items-center gap-4">
          <h1 className="font-bold font-poppins text-xl">Utku Bektaşoğlu</h1>
          <span className="font-light text-muted-foreground">
            Front-End developer
          </span>
          <div className="flex items-center gap-4 ">
            <Link
              href={"https://www.linkedin.com/in/utku-bektasoglu"}
              target="_blank"
            >
              <button className="py-3 cursor-pointer px-6 rounded-md bg-gray-200  hover:bg-gray-400 transition-all duration-300">
                <FaLinkedinIn size={25} className="text-blue-700" />
              </button>
            </Link>
            <Link href={"https://github.com/utkbkts"} target="_blank">
              <button className="py-3 cursor-pointer px-6 rounded-md bg-gray-200  hover:bg-gray-400 transition-all duration-300">
                <FaGithub size={25} className="text-black" />
              </button>
            </Link>
            <Link href={"https://www.youtube.com/@utku-dev"} target="_blank">
              <button className="py-3 cursor-pointer px-6 rounded-md bg-gray-200  hover:bg-gray-400 transition-all duration-300">
                <CiYoutube size={25} className="text-red-700" />
              </button>
            </Link>
          </div>
          <Separator className="dark:bg-white" />

          <div className="bg-bggray dark:bg-[#2b2b2b] p-12 gap-8 flex flex-col">
            <div className="flex items-center gap-4">
              <div>
                <IoMdPhonePortrait size={25} className="text-[#EC1B09]" />
              </div>
              <div className="flex flex-col font-light gap-1 font-poppins">
                Telefon numaram:
                <span className="font-bold">+90 535 463 71 78</span>
              </div>
            </div>
            <Separator className="dark:bg-white" />

            <div className="flex items-center gap-4">
              <div>
                <MdOutlineEmail size={25} className="text-[#EC1B09]" />
              </div>
              <div className="flex flex-col font-light gap-1 font-poppins">
                email:
                <span className="font-bold">
                  utkutoygunbektasoglu@gmail.com
                </span>
              </div>
            </div>
            <Separator className="dark:bg-white" />

            <div className="flex items-center gap-4">
              <div>
                <CiLocationOn size={25} className="text-[#EC1B09]" />
              </div>
              <div className="flex flex-col font-light gap-1 font-poppins">
                Konum:
                <span className="font-bold">Giresun,Turkey</span>
              </div>
            </div>
            <Separator className="dark:bg-white" />
            <div className="flex items-center justify-center">
              <Link
                download="cv.pdf"
                target="_blank"
                href="/utkubektasoglu.pdf"
              >
                <button className="color-hunt py-2 px-4 rounded-md cursor-pointer flex items-center gap-2 font-bold text-white">
                  <IoDownloadOutline className="text-white font-bold text-xl" />{" "}
                  Öz geçmiş indir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
