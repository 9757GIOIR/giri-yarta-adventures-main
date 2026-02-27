import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UpcomingTours from "@/components/UpcomingTours";
import PosterSection from "@/components/PosterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="page-shell">
      <Header />
      <HeroSection />
      <UpcomingTours />
      <PosterSection />
      <Footer />
    </div>
  );
};

export default Index;
