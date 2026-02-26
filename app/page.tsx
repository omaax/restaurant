import FirstSection from "@/components/about/FirstSection";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Ingredients from "@/components/home/Ingredients";
import Products from "@/components/home/Products";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Products />
      <Ingredients />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
}
