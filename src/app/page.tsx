import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProcessMotif } from "@/components/ui/Motif";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ShieldCheck, Home as HomeIcon, FileSearch, TreePine } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-ffsm-primary-dark pt-20">
        <div className="absolute inset-0 z-0">
          {/* Dark editorial overlay over a subtle architecture/landscape image */}
          <div className="absolute inset-0 bg-gradient-to-b from-ffsm-primary-dark/80 via-ffsm-primary-dark/50 to-ffsm-surface z-10"></div>
          {/* Unsplash image of wood cabin in forest/California aesthetic */}
          <Image
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
            alt="Hero background showing a wood cabin nestled in the trees"
            fill
            priority
            className="object-cover opacity-60 mix-blend-luminosity"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12 pb-24">
          <div className="max-w-4xl text-white">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight leading-[1.05] mb-6">
                Wildfire Resilience.<br />
                <span className="text-ffsm-primary-soft-strong">Strategically Implemented.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4 mb-8">
                <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 px-5 py-3 rounded-md border border-white/20 bg-white/10 text-white font-sans backdrop-blur-sm shadow-sm relative overflow-hidden self-start">
                  <div className="absolute inset-0 bg-gradient-to-r from-ffsm-primary/80 to-transparent opacity-80 z-0"></div>
                  <div className="relative z-10 font-bold text-sm tracking-widest uppercase">
                    Foothill FireSafe & Maintenance
                  </div>
                  <div className="relative z-10 hidden sm:block w-px h-6 bg-white/30"></div>
                  <div className="relative z-10 text-sm font-medium">
                    California Licensed Contractor – CSLB #660690
                  </div>
                  <div className="relative z-10 hidden sm:block w-px h-6 bg-white/30"></div>
                  <div className="relative z-10 text-sm font-medium">
                    Fully Licensed, Bonded & Insured
                  </div>
                </div>

                <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 px-5 py-3 rounded-md border border-white/10 bg-black/40 text-white font-sans backdrop-blur-md shadow-sm relative self-start">
                  <div className="relative z-10 text-sm font-medium">
                    Fire Authority Validation Provided By:
                  </div>
                  <div className="relative z-10 font-bold text-sm tracking-widest uppercase text-ffsm-primary-soft-strong">
                    Foothill Fire Risk Solutions
                  </div>
                  <div className="relative z-10 hidden sm:block w-px h-6 bg-white/30"></div>
                  <div className="relative z-10 text-sm font-medium text-white/80 italic">
                    Led by Rich Snyder
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-white font-sans font-medium max-w-2xl mb-12 leading-relaxed drop-shadow-md">
                Protecting Homes. Preserving Insurability. Strengthening Communities.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Link href="/services#evaluation">
                <Button size="lg" variant="primary" className="w-full sm:w-auto text-lg shadow-xl py-4 px-10">
                  Schedule a Risk Evaluation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg shadow-xl py-4 px-10 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Request a Consultation
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Wildfire Reality */}
      <section className="py-24 bg-white border-y border-ffsm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-ffsm-primary-dark mb-8">
                  The Wildfire Reality
                </h2>
                <div className="space-y-6 text-ffsm-muted text-lg font-sans leading-relaxed">
                  <p className="font-semibold text-xl text-ffsm-ink">
                    Foothill properties across Sierra Madre, Eaton Canyon, Altadena, and surrounding communities face increasing wildfire exposure, and increasing insurance scrutiny.
                  </p>

                  <div className="bg-ffsm-surface border-l-4 border-ffsm-primary p-6 rounded-r-md my-8">
                    <p className="font-bold text-ffsm-primary-dark mb-4 text-xl">
                      Wildfire resilience today is not simply about clearing brush.
                    </p>
                    <p className="font-medium text-ffsm-ink mb-4">It is about:</p>
                    <ul className="space-y-4 font-medium text-ffsm-muted">
                      <li className="flex items-start gap-4">
                        <HomeIcon className="w-6 h-6 text-ffsm-primary shrink-0" />
                        <span>Structural ignition pathways</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <FileSearch className="w-6 h-6 text-ffsm-primary shrink-0" />
                        <span>Ember intrusion vulnerability</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <TreePine className="w-6 h-6 text-ffsm-primary shrink-0" />
                        <span>Home Ignition Zones (0–5 ft / 5–30 ft / 30–100 ft)</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-ffsm-primary shrink-0" />
                        <span>Underwriting requirements</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-ffsm-primary shrink-0" />
                        <span>Documented mitigation</span>
                      </li>
                    </ul>
                  </div>

                  <p className="font-bold text-ffsm-ink text-xl">
                    We provide a coordinated strategy, from risk evaluation to licensed implementation.
                  </p>
                </div>
              </div>

              {/* Softer Image element restored to box format */}
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-sm overflow-hidden border border-ffsm-border shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop"
                    alt="Structural focus for wildfire resilience"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-ffsm-primary-dark/10"></div>
                </div>
                {/* Floating badge restored to sharp box */}
                <div className="relative -mt-10 bg-white px-8 py-4 rounded-sm border border-ffsm-border shadow-lg z-20 text-center">
                  <p className="font-sans font-bold text-ffsm-primary uppercase tracking-widest text-xs mb-1">Structural Focus</p>
                  <p className="font-heading font-bold text-ffsm-primary-dark text-lg">Architecturally Respectful Solutions</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Coordinated Approach */}
      <section className="py-32 bg-ffsm-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ffsm-primary-dark mb-6">
              Our Coordinated Approach
            </h2>
            <p className="text-xl text-ffsm-ink max-w-2xl mx-auto mb-16 font-sans font-medium">
              We do not offer partial solutions. We provide a coordinated protection system.
            </p>
          </FadeIn>

          <ProcessMotif />

          <FadeIn delay={0.4}>
            <p className="mt-16 text-lg tracking-widest uppercase font-sans font-bold text-ffsm-primary-dark/60 flex items-center justify-center gap-4 flex-wrap">
              <span>Risk Assessment</span>
              <span className="text-ffsm-primary">→</span>
              <span>Mitigation</span>
              <span className="text-ffsm-primary">→</span>
              <span>Documented Protection</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose FFSM */}
      <section className="py-24 bg-ffsm-surface border-t border-ffsm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ffsm-primary-dark mb-16 text-center">
              Why Partner With Us
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Licensed & Insured Contractor (CSLB #660690)",
              "Fire-Service Validated Risk Strategy",
              "Architecturally Respectful Solutions",
              "Insurance-Ready Documentation",
              "HOA & Community-Level Programs"
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white border border-ffsm-border p-10 h-full flex flex-col items-center text-center hover:border-ffsm-primary hover:shadow-lg transition-all duration-300 rounded-sm">
                  <CheckCircle2 className="w-10 h-10 text-ffsm-primary mb-6" />
                  <p className="text-ffsm-primary-dark font-sans font-bold text-lg leading-snug">
                    {feature}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
