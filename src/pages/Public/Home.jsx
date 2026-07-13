import Hero from "../../components/Hero";
import About from "../../components/About";
import InfoSection from "../../components/InfoSection";
import JobSection from "../../components/JobSection";
import Stats from "../../components/Stats";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <InfoSection />
      <JobSection />
      <Stats />
    </>
  );
}

export default Home;