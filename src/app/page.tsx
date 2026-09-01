import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Spaces } from "@/components/Spaces";
import { Experience } from "@/components/Experience";
import { ServiceHours } from "@/components/ServiceHours";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Spaces />
        <Experience />
        <ServiceHours />
      </main>
      <Footer />
    </>
  );
}
