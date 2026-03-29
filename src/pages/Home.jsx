import Hero from "../components/Hero";
import AboutSection from "../components/home/AboutSection";
import AuthorBanner from "../components/home/AuthorBanner";
import AuthorSection from "../components/home/AuthorSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AuthorBanner />
      <AboutSection />
      <AuthorSection />
    </>
  );
};

export default Home;
