import { Hero } from "./components/hero";
import { Highlights } from "./components/highlights";
// import { Spaces } from "./components/spaces";
import { Experience } from "./components/experience";
import { ServiceHours } from "./components/service-hours";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Location } from "./components/location";
import { FAQ } from "./components/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      {/* <Spaces /> */}
      <Gallery />
      <Experience />
      <Testimonials />
      <Location />
      <ServiceHours />
      <FAQ />
    </main>
  );
}
