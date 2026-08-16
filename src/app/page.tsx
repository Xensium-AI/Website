import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import SeeItInAction from "@/components/SeeItInAction";
import Capabilities from "@/components/Capabilities";
import CallFlow from "@/components/CallFlow";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Outcomes from "@/components/Outcomes";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
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
        <CallFlow />
        <HowItWorks />
        <Industries />
        <Outcomes />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
