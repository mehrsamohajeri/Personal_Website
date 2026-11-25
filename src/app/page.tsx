import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <main className="scroll-smooth selection:text-white selection:bg-[#acbfa3]">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}