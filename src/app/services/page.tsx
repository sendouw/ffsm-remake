import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { ProcessMotif } from "@/components/ui/Motif";

export default function Services() {
    return (
        <div className="w-full pt-20">
            {/* Header Section */}
            <section className="py-24 bg-ffsm-surface border-b border-ffsm-border text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-ffsm-primary-dark mb-6">
                            Fire Authority Informed.<br />
                            <span className="text-ffsm-primary">Contractor Executed.</span>
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* Risk Evaluation Section */}
            <section id="evaluation" className="py-24 bg-white scroll-mt-20 border-b border-ffsm-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <FadeIn>
                            <div className="sticky top-32">
                                <span className="text-ffsm-primary font-bold text-sm tracking-widest uppercase mb-4 block">Phase 01</span>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-ffsm-primary-dark mb-6">
                                    Fire-Chief Led<br />Risk Evaluation
                                </h2>
                                <div className="text-xl text-ffsm-ink font-sans font-medium leading-relaxed mb-6">
                                    Through <strong className="text-ffsm-primary-dark">Foothill Fire Risk Solutions</strong>, each property receives precise evaluation.
                                </div>
                                <div className="bg-ffsm-surface border-l-4 border-ffsm-primary p-6 rounded-r-sm inline-block shadow-sm">
                                    <p className="text-ffsm-primary-dark font-semibold text-lg italic">
                                        &quot;This ensures mitigation is informed, not guesswork.&quot;
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white border border-ffsm-border shadow-sm p-8 md:p-12 rounded-sm space-y-6">
                                {[
                                    "Comprehensive Home Ignition Zone assessment",
                                    "Ember pathway identification",
                                    "Structural vulnerability analysis",
                                    "Defensible space compliance review",
                                    "Photo-documented risk report",
                                    "Clear mitigation roadmap aligned with fire & insurance standards"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 border-b border-ffsm-border/50 pb-6 last:border-0 last:pb-0">
                                        <CheckCircle2 className="w-6 h-6 text-ffsm-primary shrink-0 mt-0.5" />
                                        <span className="text-ffsm-ink font-medium text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Hardening & Implementation Section */}
            <section id="implementation" className="py-24 bg-ffsm-surface scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="text-ffsm-primary font-bold text-sm tracking-widest uppercase mb-4 block">Phase 02</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ffsm-primary-dark mb-6">
                                Licensed Wildfire Hardening & Implementation
                            </h2>
                            <div className="text-xl text-ffsm-ink font-sans font-medium leading-relaxed">
                                By <strong className="text-ffsm-primary-dark">Foothill FireSafe & Maintenance</strong> executes mitigation with precision and discretion.
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Structural Hardening */}
                        <FadeIn delay={0.1}>
                            <div className="bg-white border border-ffsm-border shadow-sm p-8 h-full rounded-sm hover:-translate-y-1 transition-transform duration-300">
                                <ShieldCheck className="w-8 h-8 text-ffsm-primary mb-6" />
                                <h3 className="text-xl font-bold font-heading text-ffsm-primary-dark mb-6">Structural Hardening</h3>
                                <ul className="space-y-4 text-ffsm-ink font-sans font-medium">
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Ember-resistant vent retrofits</li>
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Foundation and soffit vent protection</li>
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Roof-edge & gutter hardening systems</li>
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Deck ignition protection</li>
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Ignition Zone Improvements */}
                        <FadeIn delay={0.2}>
                            <div className="bg-white border border-ffsm-border shadow-sm p-8 h-full rounded-sm hover:-translate-y-1 transition-transform duration-300">
                                <ShieldCheck className="w-8 h-8 text-ffsm-primary mb-6" />
                                <h3 className="text-xl font-bold font-heading text-ffsm-primary-dark mb-6">Ignition Zone Improvements</h3>
                                <ul className="space-y-4 text-ffsm-ink font-sans font-medium">
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> 0–5 ft non-combustible zone refinement</li>
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Perimeter ignition corrections</li>
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Attachment vulnerability mitigation</li>
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Compliance Upgrades */}
                        <FadeIn delay={0.3}>
                            <div className="bg-white border border-ffsm-border shadow-sm p-8 h-full rounded-sm hover:-translate-y-1 transition-transform duration-300">
                                <ShieldCheck className="w-8 h-8 text-ffsm-primary mb-6" />
                                <h3 className="text-xl font-bold font-heading text-ffsm-primary-dark mb-6">Compliance Upgrades</h3>
                                <ul className="space-y-4 text-ffsm-ink font-sans font-medium">
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Insurance-driven mitigation</li>
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Code-aligned corrections</li>
                                    <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-ffsm-primary-soft-strong shrink-0 mt-0.5" /> Inspection preparation support</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="mt-16">
                        <ProcessMotif />
                    </div>
                </div>
            </section>

            {/* Credential Footer */}
            <section className="py-12 bg-ffsm-primary-dark text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <p className="text-lg md:text-xl font-semibold font-sans tracking-wide">
                            All work performed by California Licensed Contractor – CSLB #660690
                        </p>
                        <p className="text-ffsm-primary-soft mt-2 font-medium">
                            Fully Licensed, Bonded & Insured
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
