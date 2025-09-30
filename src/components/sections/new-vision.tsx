export default function VisionSection() {
    return (
        <section className="w-full">
            {/* Title bar */}
            <div className="bg-[#0E3A44] text-center py-6">
                <div className=" max-w-6xl mx-auto">
                  <h2 className="text-xl font-bold text-brand font-heading2">
                    Our Vision
                </h2>
                <p className="text-white text-xl md:text-3xl mt-1 mx-auto px-4 font-heading2">
                    The Inflw Construction Community Hub aims to simplify small–medium scale
                    home renovations both for homeowners and trades pros
                </p>   
                </div>
               
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {/* Left: Dashed rounded callout */}
                <div className="relative">
                    <div className="rounded-[28px] border-2 border-dashed border-brand p-6 md:p-8 font-heading2">
                        <p className="text-brand text-xl font-semibold mb-3">Our Approach</p>

                        <p className="text-[15px] md:text-lg leading-7 text-gray-900">
                            At the Inflw Construction Community Hub <span aria-hidden>→</span>{" "}
                            <span className="font-semibold">inflw</span>, our{" "}
                            <em className="italic text-[#10B5D6]">in-house chatbot</em>,
                            <span> accesses homeowner needs, and</span>{" "}
                            <span className="font-semibold">connects them with high quality trades pros</span>{" "}
                            within a given area.
                        </p>

                        <p className="text-[15px] md:text-base leading-7 mt-4 text-gray-900">
                            We <span className="font-semibold">support</span> both parties in{" "}
                            <span className="font-semibold">managing the project workflow</span>, including
                            contracting and payment processing.
                        </p>

                        <p className="text-[15px] md:text-base leading-7 mt-4 text-gray-800 italic">
                            Homeowners simply share details about their project, and we build their
                            team of vetted trades pros
                        </p>
                    </div>
                </div>

                {/* Right: 2x2 icon grid with cross divider */}
                <div className="relative">
                    {/* Cross lines */}
                    <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gray-300/80" />
                    <span className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gray-300/80" />

                    <div className="grid grid-cols-2 grid-rows-2 gap-10 md:gap-12 items-center justify-items-center py-6 md:py-10">
                        <WorkerIcon className="w-20 h-20 md:w-24 md:h-24 text-gray-700" />
                        <WorkerIcon className="w-20 h-20 md:w-24 md:h-24 text-gray-700" />
                        <WorkerIcon className="w-20 h-20 md:w-24 md:h-24 text-gray-700" />
                        <WorkerIcon className="w-20 h-20 md:w-24 md:h-24 text-gray-700" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/** Simple worker silhouette (inline SVG so no deps). Inherit color with currentColor. */
function WorkerIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 64 64"
            className={className}
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M20 26a12 12 0 1 1 24 0v2a12 12 0 1 1-24 0v-2Z" />
            <rect x="18" y="40" width="28" height="10" rx="3" />
            <path d="M22 24h20v-3a10 10 0 0 0-20 0v3Z" />
            <path d="M12 54h40v2H12z" />
        </svg>
    );
}
