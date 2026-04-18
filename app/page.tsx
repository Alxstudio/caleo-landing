import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Savings from "@/components/sections/Savings";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Supermarkets from "@/components/sections/Supermarkets";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Savings />
      <Features />
      <HowItWorks />
      <Supermarkets />
      <CTA />
      <Footer />
    </main>
  );
}
