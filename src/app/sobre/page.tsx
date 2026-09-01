import type { Metadata } from "next";
import { AboutHero } from "./components/about-hero";
import { AboutStory } from "./components/about-story";
import { AboutValues } from "./components/about-values";
import { AboutPeople } from "./components/about-people";
import { AboutClosing } from "./components/about-closing";
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
