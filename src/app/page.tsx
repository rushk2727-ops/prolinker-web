import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LiveTicker from "@/components/sections/LiveTicker";
import TrustedBy from "@/components/sections/TrustedBy";
import StatsSection from "@/components/sections/StatsSection";
import AIFeature from "@/components/sections/AIFeature";
import HowItWorks from "@/components/sections/HowItWorks";
import Categories from "@/components/sections/Categories";
import FeaturedFreelancers from "@/components/sections/FeaturedFreelancers";
import DashboardPreview from "@/components/sections/DashboardPreview";
import LiveProjects from "@/components/sections/LiveProjects";
import WhyProLinker from "@/components/sections/WhyProLinker";
import NetworkReferral from "@/components/sections/NetworkReferral";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LiveTicker />
      <TrustedBy />
      <StatsSection />
      <AIFeature />
      <HowItWorks />
      <Categories />
      <FeaturedFreelancers />
      <DashboardPreview />
      <LiveProjects />
      <WhyProLinker />
      <NetworkReferral />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
