"use client";

import Image from "next/image";
import TitleHero from "../ui/titleHero";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

const categoryData = [
  { id: 1, title: "React", category: "react" },
  { id: 2, title: "Next.js", category: "nextjs" },
  { id: 3, title: "Node.js", category: "nodejs" },
];

const projects = [
  {
    id: 1,
    title: "Ürün yönetim projesi",
    description:
      "Ürünlerinizi, anlaşma sağladığınız müşterileri ve ürün siparişlerinizi yönetebileceğiniz, takım üyelerini ekleyebileceğiniz bir proje.",
    image: "/project.png",
    githubLink: "https://github.com/utkbkts/product-management-system",
    category: "nextjs",
  },
  {
    id: 2,
    title: "Lezzet Bahçesi",
    description:
      "Geniş kapsamlı bir yemek sipariş projesi; restoran veya kafe için ürünlerinizi pazarlayabileceğiniz, online randevu ve sipariş alabileceğiniz kapsamlı bir proje.",
    image: "/lezzet.png",
    githubLink: "https://github.com/utkbkts/LezzetBahcesi",
    category: "react,nodejs",
  },
  {
    id: 3,
    title: "Chat uygulaması",
    description:
      "Kullanıcı deneyimini optimize etmek için kullanıcı odaklı tasarımlar geliştirir ve etkileşimli sayfalar tasarlarım.",
    image: "/chat.png",
    githubLink: "https://github.com/utkbkts/Chat-App",
    category: "react,nodejs",
  },
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("hepsi");

  const filterCategory =
    selectedCategory === "hepsi"
      ? projects
      : projects.filter((item) =>
          item.category.split(",").includes(selectedCategory)
        );
  return (
    <div className="bg-white dark:bg-[#2b2b2b] w-full h-full rounded-xl p-8">
      <TitleHero title="Projelerim" />
      <div className="flex gap-4 justify-end mb-4">
        <button
          onClick={() => setSelectedCategory("hepsi")}
          className={`font-normal cat text-[16px] ${
            selectedCategory === "hepsi"
              ? "text-gray-700 font-bold active-category"
              : "text-[#969FAC]"
          } hover:text-gray-700 transition-all duration-500`}
        >
          Hepsi
        </button>
        {categoryData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedCategory(item.category)}
            className={`font-normal cat text-[16px] ${
              selectedCategory === item.category
                ? "text-gray-700 font-bold active-category"
                : "text-[#969FAC]"
            } hover:text-gray-700 transition-all duration-500`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
        {filterCategory.map((project) => (
          <div
            key={project.id}
            className="bg-[#FFEBD1] p-4 rounded-xl flex flex-col gap-2"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-[200px] object-cover rounded-xl"
            />
            <h1 className="font-bold">{project.title}</h1>
            <p className="font-poppins">{project.description}</p>
            <div>
              <Link href={project.githubLink}>
                <Button>Github</Button>
              </Link>
            </div>
          </div>
        ))}
        <div className="bg-[#FFEBD1] p-4 rounded-xl flex flex-col gap-2">
          <h1>YAKINDA</h1>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
