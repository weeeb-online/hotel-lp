import type { Metadata } from "next";
import { AboutHero } from "./components/AboutHero";
import { AboutStory } from "./components/AboutStory";
import { AboutValues } from "./components/AboutValues";
import { AboutPeople } from "./components/AboutPeople";
import { AboutClosing } from "./components/AboutClosing";
export const metadata: Metadata = {
  title: "Sobre nós | MelosHotel",
  description:
    "Conheça a história, os valores e as pessoas por trás do MelosHotel.",
};
export default function Sobre() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutPeople />
      <AboutClosing />
    </main>
  );
}
