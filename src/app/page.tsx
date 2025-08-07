import Container from "@/app/_components/container";
import { HeroSection } from "@/app/_components/hero-section";
import { ServicesOverview } from "@/app/_components/services-overview";
import { CTASection } from "@/app/_components/cta-section";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <Container>
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to Apexella GmbH
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We are your trusted partner for comprehensive IT solutions. 
              From consulting to implementation, we deliver excellence in 
              software development, automation systems, and technology integration.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300">
              Our mission is to empower businesses through innovative technology solutions 
              that drive growth, efficiency, and digital transformation.
            </p>
          </div>
        </section>
        <ServicesOverview />
        <CTASection />
      </Container>
    </main>
  );
}