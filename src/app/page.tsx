import { HeroBanner } from "@/components/home/HeroBanner";
import { TrustQuality } from "@/components/home/TrustQuality";
import { PrimaryServices } from "@/components/home/PrimaryServices";
import { DetailedServices } from "@/components/home/DetailedServices";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CallToAction } from "@/components/home/CallToAction";
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
        <DetailedServices />
      </FadeIn>
      
      <FadeIn>
        <ProcessSteps />
      </FadeIn>
      
      <FadeIn>
        <CallToAction />
      </FadeIn>
      
      <FadeIn>
        <Branches />
      </FadeIn>
    </>
  );
}
