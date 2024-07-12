import Image from "next/image";
import Hero from "./component/hero";
import ChooseUs from "./component/chooseUs";
import SectionAbout from "./component/about";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <Hero />
     <ChooseUs />
     <SectionAbout />
    </main>
  );
}
