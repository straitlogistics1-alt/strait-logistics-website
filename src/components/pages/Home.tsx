import { About } from "@/components/home/about/About";
import { Commodities } from "@/components/home/commodities/Commodities";
import { Hero } from "@/components/home/hero/Hero";
import { Services } from "@/components/home/services/Services";
import { WhyChoose } from "@/components/home/why-choose/WhyChoose";
import { Clients } from "@/components/home/clients/Clients";


export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Commodities />
      <WhyChoose />
      <Clients />
    </>
  );
}