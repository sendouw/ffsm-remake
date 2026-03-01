import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Footer() {
    return (
        <footer className="border-t border-ffsm-border bg-ffsm-surface relative z-10 pt-24 pb-12 w-full mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Universal Footer CTA */}
                <div className="bg-white border border-ffsm-border shadow-sm p-8 md:p-12 mb-16 flex flex-col items-center text-center rounded-sm">
                    <h2 className="text-3xl md:text-4xl font-heading font-semibold text-ffsm-primary-dark mb-4">
                        Schedule a Professional Wildfire Risk Evaluation
                    </h2>
                    <p className="text-lg text-ffsm-muted max-w-2xl mx-auto mb-8 font-sans">
                        Protect your property with a structured, authority-backed wildfire resilience strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/contact">
                            <Button size="lg" variant="primary" className="w-full sm:w-auto">
                                Request Consultation
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white">
                                Schedule Site Visit
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Footer Links & Info */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/logoshieldonly.png"
                                    alt="FFSM Shield Logo"
                                    width={48}
                                    height={48}
                                    className="h-12 w-auto"
                                />
                                <div>
                                    <span className="block text-2xl font-heading font-bold text-ffsm-primary tracking-tight">
                                        Foothill FireSafe
                                    </span>
                                    <span className="block text-sm font-sans font-semibold text-ffsm-primary-dark tracking-widest uppercase mt-1">
                                        & Maintenance
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-ffsm-muted text-sm max-w-sm mt-6 leading-relaxed font-sans">
                            Providing a structured wildfire resilience strategy — combining fire-authority risk evaluation with licensed, code-aligned implementation.
                        </p>
                        <div className="pt-4 text-xs font-sans text-ffsm-muted font-medium">
                            <p>California Licensed Contractor – CSLB #660690</p>
                            <p>Fully Licensed, Bonded & Insured</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-sans tracking-wider uppercase text-ffsm-ink mb-6 font-bold">Navigation</h3>
                        <ul className="space-y-4 text-sm text-ffsm-muted font-sans font-medium">
                            <li><Link href="/" className="hover:text-ffsm-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-ffsm-primary transition-colors">About</Link></li>
                            <li><Link href="/services" className="hover:text-ffsm-primary transition-colors">Services</Link></li>
                            <li><Link href="/community" className="hover:text-ffsm-primary transition-colors">Community</Link></li>
                            <li><Link href="/news" className="hover:text-ffsm-primary transition-colors">News</Link></li>
                            <li><Link href="/events" className="hover:text-ffsm-primary transition-colors">Events</Link></li>
                            <li><Link href="/insurance" className="hover:text-ffsm-primary transition-colors">Insurance Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-sans tracking-wider uppercase text-ffsm-ink mb-6 font-bold">Validation</h3>
                        <div className="space-y-3 text-sm font-sans text-ffsm-muted border-l-2 border-ffsm-primary-soft-strong pl-4">
                            <p className="font-bold text-ffsm-primary-dark">Foothill Fire Risk Solutions</p>
                            <p className="font-medium">Led by Rich Snyder</p>
                            <p className="text-xs">Fire Authority Validation Partner</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-sans tracking-wider uppercase text-ffsm-ink mb-6 font-bold">Service Areas</h3>
                        <ul className="space-y-3 text-sm text-ffsm-muted font-sans font-medium">
                            <li>Sierra Madre</li>
                            <li>Altadena</li>
                            <li>Arcadia</li>
                            <li>Monrovia</li>
                            <li>Duarte</li>
                            <li>Bradbury</li>
                            <li>Eaton Canyon</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-ffsm-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ffsm-muted font-sans">
                    <p>© {new Date().getFullYear()} Foothill FireSafe & Maintenance. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
