"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GlobalChrome({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isStudio = pathname?.startsWith("/studio");

    if (isStudio) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
        </>
    );
}
