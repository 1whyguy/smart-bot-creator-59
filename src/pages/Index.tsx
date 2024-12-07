import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowToStart } from "@/components/HowToStart";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowToStart />
    </div>
  );
};

export default Index;