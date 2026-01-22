import { Navigation } from "@/app/components/navigation";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Services } from "@/app/components/services";
import { Profiles } from "@/app/components/profiles";
import { WhyChoose } from "@/app/components/why-choose";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Profiles />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
}
