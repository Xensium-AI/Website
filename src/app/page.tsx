import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import SeeItInAction from "@/components/SeeItInAction";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pageShell">
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <SeeItInAction />
        <Capabilities />
        <HowItWorks />
        <Results />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
