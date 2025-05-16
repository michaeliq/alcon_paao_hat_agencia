import "../../styles/pages/Home/HomePage.css";
import { Footer } from "../../components/Footer";
import { HeroBanner } from "../../containers/Home/HeroBanner";
import { CronoSection } from "../../containers/Home/CronoSection";
import { Header } from "../../components/Header";
import { Info1Section } from "../../containers/Home/Info1Section";
import { Info2Section } from "../../containers/Home/Info2Section";
import { Info3Section } from "../../containers/Home/Info3Section";
import { VideoSection } from "../../containers/Home/VideoSection";
import { StandSection } from "../../containers/Home/StandSection";
import { MapSection } from "../../containers/Home/MapSection";

export function HomePage() {
  return (
    <div className="home-page">
      <Header/>
      <HeroBanner />
      <CronoSection />
      <Info1Section/>
      <Info2Section/>
      <Info3Section/>
      <VideoSection/> 
      <StandSection/>
      <MapSection/>
      <Footer />
    </div>
  );
}