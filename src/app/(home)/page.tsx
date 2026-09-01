import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Spaces } from "./components/Spaces";
import { Experience } from "./components/Experience";
import { ServiceHours } from "./components/ServiceHours";
import { Gallery } from "./components/Gallery";
import { LocalExperiences } from "./components/LocalExperiences";
import { Testimonials } from "./components/Testimonials";
import { Location } from "./components/Location";
import { FAQ } from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Spaces />
      <Gallery />
      <Experience />
      <LocalExperiences />
      <Testimonials />
      <Location />
      <ServiceHours />
      <FAQ />
    </main>
  );
}
