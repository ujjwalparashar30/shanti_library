import ActionBar from "@/components/ActionBar";
import LibraryContact from "@/components/ContactUs";
import FacilitiesSlider from "@/components/Facilities";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeorSection";
import YoutubeSlider from "@/components/YoutubeSlider";
import Image from "next/image";

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
