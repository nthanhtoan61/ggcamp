import { HeroSection } from "@/components/layouts";
import MagicButton from "@/components/home/MagicButton";
import ContactBox from "@/components/home/ContactBox";

export default function HomeHeroSection() {
    return (
        <HeroSection
            title={<>Discover Adventure and Friendship</>}
            backgroundImage="yootheme/banner/b3.jpg"
            overlayColor="rgba(0, 0, 0, 0.35)"
            sectionClass="uk-section-secondary uk-section-overlap uk-preserve-color uk-light"
            titleClass="uk-heading-large uk-text-center !text-[8vw] md:!text-[5vw] max-sm:leading-tight"
            enableScrollspy={true}
            backgroundPosition="top-center"
            buttonContent={
                <MagicButton href="/booking" label="Book your Smile" />
            }
        >
            <ContactBox />
        </HeroSection>
    );
}
