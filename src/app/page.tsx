import HomeAbout from "@/components/homePage/homeAbout";
import Dashboard from "./dashboard/page";

const Home = () => {
  return (
    <Dashboard>
      <HomeAbout />
    </Dashboard>
  );
};

export default Home;
