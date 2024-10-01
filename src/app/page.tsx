import Hero from "./component/hero";
import ChooseUs from "./component/chooseUs";
import SectionAbout from "./component/about";
import Offer from "./component/offer";
import Testimonial from "./component/testimonial";
import BlogSection from "./component/blogSection";
import GallerySection from "./component/gallerySection";

export default function Home() {

  return (
    <main className="overflow-hidden">
     <Hero />
     <ChooseUs />
     <SectionAbout />
     <Offer />
     <GallerySection />
     <Testimonial />
     <BlogSection />
    </main>
  );
}
