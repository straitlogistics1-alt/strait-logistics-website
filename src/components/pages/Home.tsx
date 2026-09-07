import { About } from "@/components/home/about/About";
import { Clients } from "@/components/home/clients/Clients";
import { Commodities } from "@/components/home/commodities/Commodities";
import { Contact } from "@/components/home/contact/Contact";
import { Hero } from "@/components/home/hero/Hero";
import { Services } from "@/components/home/services/Services";
import { WhyChoose } from "@/components/home/why-choose/WhyChoose";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Commodities />
      <WhyChoose />
      <Clients />
      <Contact />
    </>
  );
}