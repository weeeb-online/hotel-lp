import type { Metadata } from "next";
import { AboutHero } from "./components/about_hero";
import { AboutStory } from "./components/about_story";
import { AboutValues } from "./components/about_values";
import { AboutPeople } from "./components/about_people";
import { AboutClosing } from "./components/about_closing";
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
