import Image from "next/image";
import Hero from "./component/hero";
import ChooseUs from "./component/chooseUs";
import SectionAbout from "./component/about";
import Offer from "./component/offer";
import Gallery from "./component/gallery";
import Testimonial from "./component/testimonial";
import BlogSection from "./component/blog";

export default function Home() {
  return (
    <main className="overflow-hidden">
     <Hero />
     <ChooseUs />
     <SectionAbout />
     <Offer />
     <Gallery />
     <Testimonial />
     <BlogSection />
    </main>
  );
}
