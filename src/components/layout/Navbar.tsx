"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Community", href: "/community" },
    { name: "News", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Insurance Support", href: "/insurance" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-ffsm-surface/90 backdrop-blur-md shadow-sm border-b border-ffsm-border" : "bg-ffsm-surface/50 backdrop-blur-sm border-b border-ffsm-border/50"
                }`}
        >
            <div className="bg-ffsm-primary-dark text-white py-2 px-4 sm:px-6 lg:px-8 text-xs text-center tracking-wide flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                <span>Fire Authority Validation: <strong className="font-semibold">Foothill Fire Risk Solutions</strong></span>
                <span className="opacity-90">(Led by Rich Snyder)</span>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/foothill-firesafe-maintainence-logo-full.png"
                                alt="Foothill FireSafe & Maintenance Logo"
                                width={180}
                                height={60}
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-semibold font-sans text-ffsm-ink hover:text-ffsm-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <Link href="/services#evaluation">
                            <Button variant="primary" size="md">
                                Schedule a Risk Evaluation
                            </Button>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-ffsm-ink p-2 hover:bg-ffsm-primary-soft rounded-sm transition-colors"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-ffsm-surface border-b border-ffsm-border shadow-lg">
                    <div className="space-y-1 px-4 pb-6 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block rounded-md px-3 py-3 text-base font-semibold font-sans text-ffsm-ink hover:bg-ffsm-primary-soft hover:text-ffsm-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 px-3">
                            <Link href="/services#evaluation" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="primary" className="w-full">
                                    Schedule a Risk Evaluation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
