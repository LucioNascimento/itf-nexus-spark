import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsSection from "@/components/WhatIsSection";
import MarketTypesSection from "@/components/MarketTypesSection";
import MultichannelSection from "@/components/MultichannelSection";
import WalletsSection from "@/components/WalletsSection";
import CortexSection from "@/components/CortexSection";
import UseCasesSection from "@/components/UseCasesSection";
import FAQSection from "@/components/FAQSection";
import InviteSection from "@/components/InviteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatIsSection />
        <MarketTypesSection />
        <MultichannelSection />
        <WalletsSection />
        <CortexSection />
        <UseCasesSection />
        <FAQSection />
        <InviteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
