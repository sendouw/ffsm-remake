import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";
import { ProcessMotif } from "@/components/ui/Motif";
import Image from "next/image";

export default function About() {
    return (
        <div className="w-full pt-20">
            {/* Header Section */}
            <section className="py-24 bg-ffsm-surface relative overflow-hidden border-b border-ffsm-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <FadeIn>
                            <h1 className="text-5xl md:text-6xl font-heading font-bold text-ffsm-primary-dark mb-8 leading-tight">
                                A Higher Standard of Wildfire Protection
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="space-y-6 text-xl text-ffsm-ink font-sans font-medium leading-relaxed">
                                <p>
                                    Foothill FireSafe-Maintenance Inc. was founded to bring structure, professionalism, and authority to wildfire mitigation.
                                </p>
                                <p>
                                    We approach wildfire hardening as asset protection, not landscaping, not patchwork upgrades, and not temporary fixes.
                                </p>
                                <div className="border-l-4 border-ffsm-primary bg-white p-8 rounded-sm shadow-sm mt-8 border-y border-r border-y-ffsm-border border-r-ffsm-border">
                                    <p className="mb-3 text-ffsm-muted font-semibold">Our implementation is grounded in real-world fire service expertise through collaboration with:</p>
                                    <p className="font-bold text-ffsm-primary-dark text-2xl font-heading mb-1">Foothill Fire Risk Solutions</p>
                                    <p className="text-sm font-bold text-ffsm-primary tracking-wide uppercase">Led by retired Fire Chief Rich Snyder</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-white border-b border-ffsm-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <FadeIn className="lg:col-span-4 flex justify-center lg:justify-start">
                            <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center bg-transparent">
                                {/* Logo Placeholder */}
                                <Image
                                    src="/logoshieldonly.png"
                                    alt="Foothill FireSafe-Maintenance Logo"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </FadeIn>

                        <div className="lg:col-span-8 flex flex-col justify-center">
                            <FadeIn delay={0.1}>
                                <h2 className="text-4xl font-heading font-bold text-ffsm-primary-dark mb-8">
                                    Our Story
                                </h2>
                                <div className="space-y-6 text-ffsm-ink font-sans leading-relaxed text-lg">
                                    <p>
                                        Foothill FireSafe-Maintenance Inc. was formed in response to the devastating impact of the Eaton Fires. After experiencing evacuations firsthand, three professionals came together with a shared mission: to provide comprehensive, expert wildfire mitigation services to foothill communities.
                                    </p>
                                    <p>
                                        Our partnership combines architectural expertise, custom building experience, and community-focused operations to deliver turnkey wildfire protection solutions. We understand the unique challenges facing homes in fire-prone areas because we live here too.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="py-24 bg-ffsm-surface border-b border-ffsm-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-ffsm-primary-dark mb-16 text-center">
                            Meet Our Team
                        </h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="h-full">
                            <div className="bg-white border border-ffsm-border shadow-sm p-8 rounded-sm h-full flex flex-col">
                                <h3 className="text-2xl font-heading font-bold text-ffsm-primary-dark mb-2">Gabriel Sanchez</h3>
                                <p className="text-ffsm-primary font-bold font-sans tracking-wide uppercase text-xs mb-6 pb-4 border-b border-ffsm-border">
                                    Architect & Regulatory Expert
                                </p>
                                <p className="text-ffsm-ink font-sans leading-relaxed">
                                    Experience with municipal/government-involved construction projects; focuses on safety, compliance, build quality.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="h-full">
                            <div className="bg-white border border-ffsm-border shadow-sm p-8 rounded-sm h-full flex flex-col">
                                <h3 className="text-2xl font-heading font-bold text-ffsm-primary-dark mb-2">Mike Manougian</h3>
                                <p className="text-ffsm-primary font-bold font-sans tracking-wide uppercase text-xs mb-6 pb-4 border-b border-ffsm-border">
                                    Custom Home Builder & Materials Specialist
                                </p>
                                <p className="text-ffsm-ink font-sans leading-relaxed">
                                    Full-cycle home construction and structural detailing; leads hands-on hardening solutions including expert vent retrofitting with certified mesh. Specializes in custom-fitted installations requiring precision craftsmanship.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} className="h-full">
                            <div className="bg-white border border-ffsm-border shadow-sm p-8 rounded-sm h-full flex flex-col">
                                <h3 className="text-2xl font-heading font-bold text-ffsm-primary-dark mb-2">Sevag Manuelian</h3>
                                <p className="text-ffsm-primary font-bold font-sans tracking-wide uppercase text-xs mb-6 pb-4 border-b border-ffsm-border">
                                    Operations, Customer Service & Community Engagement
                                </p>
                                <p className="text-ffsm-ink font-sans leading-relaxed">
                                    Leadership + service-driven operations + solutions-based project management; ensures planning and homeowner support.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Captain Rich Snyder Bio Section */}
            <section className="py-24 bg-white border-b border-ffsm-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            <div className="lg:col-span-4 flex justify-center lg:justify-start hidden lg:flex">
                                <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center bg-transparent">
                                    <Image
                                        src="/logoshieldonly.png"
                                        alt="Foothill FireSafe-Maintenance Shield"
                                        fill
                                        className="object-contain p-4 opacity-80"
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-8 flex flex-col justify-center">
                                <h2 className="text-3xl font-heading font-bold text-ffsm-primary-dark mb-1">Captain Rich Snyder</h2>
                                <p className="text-ffsm-primary font-bold font-sans tracking-wide uppercase text-sm mb-8">Fire Authority Validation Partner</p>
                                <div className="space-y-6 text-ffsm-ink font-sans leading-relaxed text-lg">
                                    <p>
                                        <strong className="text-ffsm-primary-dark">Through a strategic collaboration with Foothill FireSafe-Maintenance,</strong> Captain Rich Snyder brings decades of unparalleled, real-world firefighting experience to our mitigation strategies. His extensive background and years of dedicated service on the front lines are a cornerstone of our company, giving homeowners the highest level of trust in our assessments and execution.
                                    </p>
                                    <p>
                                        A native to Southern California, Captain Snyder began his fire career in 1986 with the Sierra Madre Fire Department. In 1990, Rich became a career Fire Prevention Specialist and has served as the City’s Fire Marshal and Station Shift Captain since 1995.
                                    </p>
                                    <p>
                                        Rich holds State Certifications including Fire Investigator, Fire Protection Specialist, Fire Prevention Officer, Plans Examiner, and Wildfire Engine Boss among others. Throughout his career, he has served on many State and Local Wildland Code Development Committees and has responded to dozens of wildland fire incidents throughout the state of California as a Captain/Engine Boss.
                                    </p>
                                    <p>
                                        Rich was the first to successfully develop a unique ground application of PHOS-CHEK fire retardant, a program he’s utilized to protect the perimeter of the city of Pasadena’s iconic Rose Bowl and other wildfire-risk areas in the San Gabriel Valley, annually for the past 30 years.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-ffsm-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <FadeIn>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-ffsm-primary-dark mb-8">
                                    Our Philosophy
                                </h2>
                                <p className="text-xl text-ffsm-ink font-sans font-medium leading-relaxed mb-12">
                                    We serve established foothill homes, many built before modern WUI codes, by strengthening structural resistance while preserving character and design integrity.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white border border-ffsm-border p-8 md:p-12 rounded-sm shadow-sm">
                                <h3 className="text-2xl font-heading font-bold text-ffsm-primary-dark mb-8">Wildfire resilience should be:</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Strategically evaluated",
                                        "Professionally executed",
                                        "Properly documented",
                                        "Architecturally respectful"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-ffsm-ink font-sans text-xl font-medium">
                                            <CheckCircle2 className="w-6 h-6 text-ffsm-primary shrink-0" />
                                            <span>{item}</span>
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
        </div>
    );
}
