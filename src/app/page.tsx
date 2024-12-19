import Hero from "@/components/Hero";
import News from "@/components/News";
import Strategies from "@/components/Strategies";
import Tagline from "@/components/Tagline";
import Team from "@/components/Team";

const Home = () => {
  return (
    <div>
      <Tagline />
      <Hero />
      <News />
      <Strategies />
      <Team />
    </div>
  );
};

export default Home;
