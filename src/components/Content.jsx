import { CTASection, HeroSection, ServiceSection, StatsSection, TestimonialsSection } from "./ui";

export default function Content() {
    return (
        <main className="overflow-x-hidden">
            <HeroSection />
            <StatsSection />
            <ServiceSection />
            <TestimonialsSection />
            <CTASection title={"Ready to Capture Your Story?"} text={"Let's create beautiful memories together. Book your session today!"} />
        </main>
    )
}