import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/features/Features";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { Subscriptions } from "@/components/subscriptions/Subscriptions";
import { Partners } from "@/components/Partners";
import { InDevelopment } from "@/components/development/InDevelopment";
import { Support } from "@/components/Support";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WhyUs />
      <Testimonials />
      <HowItWorks />
      <Subscriptions />
      <Partners />
      <InDevelopment />
      <Support />
      <FAQ />
    </div>
  );
};

export default Index;