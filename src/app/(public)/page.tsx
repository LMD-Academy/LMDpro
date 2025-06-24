import { CourseHighlightsSection } from '@/components/landing/CourseHighlightsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { UseCasesSection } from '@/components/landing/UseCasesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="bg-background">
        <div className="container space-y-24 py-24 sm:space-y-32">
          <FeaturesSection />
          <UseCasesSection />
          <CourseHighlightsSection />
          <PricingSection usePaperCutStyle={true} />
        </div>
      </div>
    </>
  );
}
