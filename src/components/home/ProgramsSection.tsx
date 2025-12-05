import { ProgramCard } from "@/components/features/ProgramCard";
import MagicButton from "@/components/home/MagicButton";

interface Program {
    id: string;
    title: string;
    price: string;
    seasons: string[];
    age: string;
    location: string;
    image: string;
    slug: string;
}

interface ProgramsSectionProps {
    programs: Program[];
    maxDisplay?: number;
}

export default function ProgramsSection({
    programs,
    maxDisplay = 6
}: ProgramsSectionProps) {
    return (
        <>
            {/* Programs Section Header */}
            <div className="uk-section-default uk-section uk-section-small">
                <div className="uk-container">
                    <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                        <div className="uk-width-1-1">
                            <div className="uk-h2 uk-text-center@m uk-text-center">
                                <div className="inline-flex items-center gap-[0.5vw] !text-[var(--color-primary)] text-xl md:text-[2vw] !font-bold !mb-[4vh] !tracking-wider uppercase leading-none">
                                    Activies
                                </div>
                                <div className="text-2xl md:text-[2.5vw]  !font-bold text-gray-900 !mb-[2vh] !mt-0 leading-tight">
                                    Explore Our Activities
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Programs Grid */}
            <div className="uk-section-default uk-section uk-padding-remove-top">
                <div className="uk-container">
                    <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                        <div className="uk-width-1-1">
                            <div id="page#2" className="uk-margin">
                                <div
                                    className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                                    uk-grid=""
                                >
                                    {programs.slice(0, maxDisplay).map((program) => (
                                        <ProgramCard key={program.id} {...program} />
                                    ))}
                                </div>
                                {/* See More Button */}
                                <div className="uk-text-center uk-margin-large">
                                    <MagicButton href="/booking" label="Explore Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
