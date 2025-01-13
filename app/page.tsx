import { HeroSection } from "./sections/hero";
import { ProductPreview } from "./sections/product-preview";
import { CTA } from "./sections/CTA";
import { FeaturesSection } from "./sections/features-section";
import ProfileOverlay from "./sections/share";
import { Companies } from "./sections/companies";
import LandingPageFooter from "./sections/footer";
import ProfilePage from "./sections/product-review";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProfilePage />
      <Companies />
      <CTA />
      <ProductPreview />
      <FeaturesSection />
      <ProfileOverlay />
      <LandingPageFooter />
    </div>
  );
}
