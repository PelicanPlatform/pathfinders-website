import Recent from "@/components/Recent";
import PartnerList from "@/components/PartnerList";
import Strategies from "@/components/Strategies";
import Tagline from "@/components/Tagline";
import Team from "@/components/Team";

const Home = () => {
  return (
    <div>
      <Tagline />
      <main>
        <Recent />
        <PartnerList />
        <Strategies />
        <Team />
      </main>
    </div>
  );
};

export default Home;
