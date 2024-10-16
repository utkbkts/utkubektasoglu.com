/* eslint-disable react/no-unescaped-entities */
"use client";
import TitleHero from "../ui/titleHero";

const HomeAbout = () => {
  return (
    <div className="bg-white dark:bg-[#2b2b2b] w-full h-full rounded-xl p-8">
      <TitleHero title="Hakkımda" />
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-gray-500 mds:text-start text-center">
            Yazılıma olan tutkum küçük yaşlardan itibaren geliyor, ancak bu
            fırsatı yıllarca ertelediğimin farkına vardım. 17 Aralık 2022
            tarihinde yazılım öğrenmeye başladım. Hangi yöne gideceğim konusunda
            hiçbir fikrim yoktu, bu yüzden YouTube'da biraz araştırma yapmaya
            başladım. Sözlükler, siteler ve sonra Udemy'yi keşfettim ve Udemy'de
            bir kursa kaydolduğumda ilk adımımı attım.
          </p>
          <p className="font-poppins text-gray-500 mds:text-start text-center">
            HTML öğrendim, ardından CSS, sonrasında JavaScript. Bir butona şekil
            vermek, tıklamak ve sizi başka sayfalara yönlendirmesi beni
            gerçekten cezbetti. Yaklaşık bir yıl sonra React ile tanıştım ve beş
            ay sonra Node.js, MongoDB, PostgreSQL ile devam ettim. Ardından
            Next.js, API entegrasyonları ve sayfa yönlendirmeleri üzerine
            çalıştım. RTK Query, TanStack Query ve Axios kullanarak API'lerden
            veri çekmeyi öğrendim, Redux Toolkit ile state'leri yönetmeyi
            öğrendim. Backend geliştirme sürecimde, Socket.IO ile gerçek zamanlı
            iletişimi sağlamayı, Express framework'ü ile rotaları yönetmeyi ve
            controller'lar aracılığıyla veri modelleri oluşturmaya öğrendim.
          </p>
          <p className="font-poppins text-gray-500 mds:text-start text-center">
            Bu kadar şeyden sonra, iki yıl gibi bir süre geçtiğini görüyorum.
            Kendime baktığımda, kendisini geliştirmiş ve hala geliştirmeye devam
            eden birini görüyorum.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-raleway text-2xl font-bold dark:text-white">
            Peki Neler Yapabilirim !
          </h1>
          <div className="grid mds:grid-cols-2 grid-cols-1 gap-4 mt-4 dark:text-black">
            <div className={`bg-[#FFEBD1] p-4 rounded-xl`}>
              <h1 className="font-bold">Web Designer</h1>
              <p className="font-poppins">
                Kullanıcı dostu ve estetik dizaynlar oluşturur, web projelerinin
                görsel kimliğini güçlendiririm.
              </p>
            </div>
            <div className={`bg-[#F2F7FC] p-4 rounded-xl`}>
              <h1 className="font-bold">Frontend Developer</h1>
              <p className="font-poppins">
                React ve Next.js kullanarak dinamik ve etkileşimli kullanıcı
                arayüzleri geliştiririm.
              </p>
            </div>
            <div className={`bg-[#F2F7FC] p-4 rounded-xl`}>
              <h1 className="font-bold">Full Stack Developer</h1>
              <p className="font-poppins">
                Node.js ile backend geliştirmeleri yaparak MongoDB veritabanı
                ile güçlü ve ölçeklenebilir uygulamalar oluştururum.
              </p>
            </div>
            <div className={`bg-[#FFEBD1] p-4 rounded-xl`}>
              <h1 className="font-bold">UI/UX Developer</h1>
              <p className="font-poppins">
                Kullanıcı deneyimini optimize etmek için kullanıcı odaklı
                tasarımlar geliştirir ve etkileşimli sayfalar tasarlarım.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
