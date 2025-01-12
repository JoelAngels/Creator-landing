import { HeroSection } from "./sections/hero";
import { ProductPreview } from "./sections/product-preview";
import { CTA } from "./sections/CTA";
import { FeaturesSection } from "./sections/features-section";
import ProfileOverlay from "./sections/share";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CTA />
      <ProductPreview />
      <FeaturesSection />
      <ProfileOverlay />
    </div>
  );
}
