import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { ProcessMotif } from "@/components/ui/Motif";

export default function Community() {
    return (
        <div className="w-full pt-20">
            <section className="py-24 bg-white relative overflow-hidden border-b border-ffsm-border">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ffsm-surface/80 to-transparent z-0"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-ffsm-border/50 z-0"></div>
                <div className="absolute left-1/2 top-0 w-px h-full bg-ffsm-border/50 z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <FadeIn>
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ffsm-primary-dark mb-8 text-balance leading-tight">
                                    Community-Level Wildfire Resilience
                                </h1>
                                <p className="text-2xl text-ffsm-primary font-medium mb-8 border-l-4 border-ffsm-primary-soft-strong pl-6">
                                    Wildfire risk does not stop at property lines.
                                </p>
                                <div className="space-y-6 text-lg text-ffsm-ink leading-relaxed font-sans font-medium">
                                    <p>
                                        We provide structured HOA and community programs designed to:
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                        {[
                                            "Reduce overall ignition vulnerability",
                                            "Improve community-wide insurability positioning",
                                            "Provide professional documentation",
                                            "Support board-level liability management"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3 bg-ffsm-surface border border-ffsm-border p-4 rounded-sm items-center">
                                                <ShieldAlert className="w-5 h-5 text-ffsm-primary shrink-0" />
                                                <span className="text-sm font-semibold text-ffsm-primary-dark">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white border border-ffsm-border p-8 md:p-12 rounded-sm shadow-md">
                                <h2 className="text-3xl font-heading font-bold text-ffsm-primary-dark mb-8">
                                    Services Include
                                </h2>
                                <ul className="space-y-6">
                                    {[
                                        "Community risk assessments",
                                        "Homeowner evaluation programs",
                                        "Phased mitigation planning",
                                        "Board presentations & education",
                                        "Community documentation packages",
                                        "Coordination with insurers and fire authorities"
                                    ].map((service, idx) => (
                                        <li key={idx} className="flex items-start gap-4 pb-4 border-b border-ffsm-border/50 last:border-0 last:pb-0">
                                            <CheckCircle2 className="w-6 h-6 text-ffsm-primary shrink-0 mt-0.5" />
                                            <span className="text-ffsm-ink font-sans font-semibold text-lg">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="mt-24">
                        <ProcessMotif />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-ffsm-surface text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <p className="text-3xl md:text-4xl font-heading text-ffsm-primary-dark leading-relaxed italic font-medium">
                            &quot;A coordinated approach reduces fragmentation and strengthens the entire neighborhood&apos;s risk profile.&quot;
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
