"use client";
import TitleHero from "../ui/titleHero";

const ResumePage = () => {
  return (
    <div className="bg-white dark:bg-[#2b2b2b] w-full h-full rounded-xl p-8">
      <TitleHero title="Öz geçmiş" />
      <div className="flex mds:p-8 p-1 gap-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl font-bold font-poppins dark:text-white">
            Eğitim
          </h1>
          <div className={`bg-[#FFEBD1] p-4 rounded-xl`}>
            <h1 className="font-light">2021-2024</h1>
            <p className="font-poppins font-bold">
              Anadolu Üniversitesi - Lisans
            </p>
            <p className="font-poppins font-normal">İşletme</p>
          </div>
          <div className={`bg-[#FFEBD1] p-4 rounded-xl`}>
            <h1 className="font-light">2021-2024</h1>
            <p className="font-poppins font-bold">
              Giresun Üniversitesi - ÖnLisans
            </p>
            <p className="font-poppins font-normal">İşletme</p>
          </div>
          <div className={`bg-[#FFEBD1] p-4 rounded-xl`}>
            <h1 className="font-light">-</h1>
            <p className="font-poppins font-bold">Teknik Meslek Lisesi</p>
            <p className="font-poppins font-normal">Elektrik-Elektronik</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold dark:text-white text-[14px]">
            Programlama Dilleri
          </h1>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">
            JavaScript
          </button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">
            TypeScript
          </button>
        </div>

        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold dark:text-white text-[16px]">
            Frameworkler
          </h1>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">Express</button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">Next.js</button>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold dark:text-white text-[16px]">
            Veritabanları
          </h1>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">Mongodb</button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">
            PostgreSQL
          </button>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold dark:text-white text-[16px]">
            Çalışma Ortamı
          </h1>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">Node.js</button>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold dark:text-white text-[16px]">
            Kütüphaneler
          </h1>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">React</button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">
            Ant Design
          </button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">Shadcn</button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">
            Material-UI
          </button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">
            Daisy UI
          </button>
          <button className="bg-[#F2F7FC] py-2 px-4 rounded-xl">
            Socket.io
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
