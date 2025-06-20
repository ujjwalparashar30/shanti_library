import LibraryContact from "@/components/ContactUs";
import FacilitiesSlider from "@/components/Facilities";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeorSection";
import YoutubeSlider from "@/components/YoutubeSlider";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <LibraryContact    />
      <FacilitiesSlider />
      <YoutubeSlider />
    </>
  );
}
