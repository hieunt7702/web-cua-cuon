import { HeroBanner } from "@/components/home/HeroBanner";
import { TrustQuality } from "@/components/home/TrustQuality";
import { PrimaryServices } from "@/components/home/PrimaryServices";
import { AboutUs } from "@/components/home/AboutUs";
import { DetailedServices } from "@/components/home/DetailedServices";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CallToAction } from "@/components/home/CallToAction";
import { Gallery } from "@/components/home/Gallery";
import { Branches } from "@/components/home/Branches";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <HeroBanner />
      
      <FadeIn>
        <TrustQuality />
      </FadeIn>
      
      <FadeIn>
        <PrimaryServices />
      </FadeIn>
      
      <FadeIn>
        <AboutUs />
      </FadeIn>
      
      <FadeIn>
        <DetailedServices />
      </FadeIn>

      <FadeIn>
        <FeaturedProducts />
      </FadeIn>
      
      <FadeIn>
        <ProcessSteps />
      </FadeIn>
      
      <FadeIn>
        <CallToAction />
      </FadeIn>

      <FadeIn>
        <Gallery />
      </FadeIn>
      
      <FadeIn>
        <Branches />
      </FadeIn>
    </>
  );
}
