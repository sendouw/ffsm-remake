import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, AlertTriangle, FileCheck } from "lucide-react";
import { ProcessMotif } from "@/components/ui/Motif";

export default function InsuranceSupport() {
    return (
        <div className="w-full pt-20">
            <section className="py-24 bg-ffsm-surface border-b border-ffsm-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ffsm-primary-soft-strong/40 via-transparent to-transparent opacity-60"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ffsm-primary-dark mb-8 leading-tight">
                            Wildfire Mitigation That <br />
                            <span className="text-ffsm-primary">Supports Insurability</span>
                        </h1>
                    </FadeIn>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <FadeIn>
                            <div>
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-ffsm-border">
                                    <AlertTriangle className="w-8 h-8 text-ffsm-primary-dark" />
                                    <h2 className="text-3xl font-heading font-bold text-ffsm-primary-dark">
                                        The Insurance Reality
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-ffsm-surface border border-ffsm-border p-6 md:p-8 rounded-sm shadow-sm">
                                        <p className="text-xl font-bold font-sans text-ffsm-primary-dark mb-6">
                                            Insurance carriers are increasingly evaluating:
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Structural vulnerability",
                                                "Ember-resistant features",
                                                "Defensible space compliance",
                                                "Documented mitigation records"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-ffsm-ink font-sans font-medium text-lg">
                                                    <span className="w-2 h-2 rounded-full bg-ffsm-primary shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-white border-2 border-ffsm-primary-soft-strong p-6 md:p-8 rounded-sm shadow-sm">
                                        <p className="text-xl font-bold font-sans text-ffsm-primary-dark mb-6">
                                            Many homeowners now face:
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Policy non-renewals",
                                                "Premium increases",
                                                "Inspection-driven upgrade requirements"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-ffsm-ink font-sans font-medium text-lg">
                                                    <span className="w-2 h-2 rounded-full bg-ffsm-primary-dark shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="flex flex-col h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-ffsm-border">
                                    <FileCheck className="w-8 h-8 text-ffsm-primary-dark" />
                                    <h2 className="text-3xl font-heading font-bold text-ffsm-primary-dark">
                                        How We Help
                                    </h2>
                                </div>

                                <div className="bg-ffsm-primary-dark border border-ffsm-primary p-8 md:p-12 rounded-sm flex-1 flex flex-col justify-between shadow-lg">
                                    <ul className="space-y-6 mb-12">
                                        {[
                                            "Professional risk documentation",
                                            "Licensed mitigation records",
                                            "Coordinated assessment and execution",
                                            "Insurer-ready reporting",
                                            "Clear compliance alignment"
                                        ].map((service, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <CheckCircle2 className="w-6 h-6 text-ffsm-primary-soft-strong shrink-0 mt-0.5" />
                                                <span className="text-white font-sans font-semibold text-lg">{service}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-8 border-t border-ffsm-primary/50 space-y-4 text-ffsm-primary-soft font-sans font-medium leading-relaxed text-lg">
                                        <p className="text-white font-bold text-xl">
                                            When mitigation is validated by fire authority expertise and executed by a licensed contractor, credibility increases.
                                        </p>
                                        <p>
                                            That matters to insurers. That matters to property value. That matters to long-term protection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="mt-24">
                        <ProcessMotif />
                    </div>
                </div>
            </section>
        </div>
    );
}
