"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ProcessMotif() {
    const steps = [
        { number: "01", label: "Fire-Chief Led Risk Evaluation" },
        { number: "02", label: "Licensed Wildfire Hardening" },
        { number: "03", label: "Documentation & Insurability Positioning" },
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl mx-auto py-8 font-sans">
            {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        className="flex items-center gap-3 bg-white border border-ffsm-border shadow-sm px-6 py-4 rounded-sm flex-1 w-full sm:w-auto hover:border-ffsm-primary-soft-strong transition-colors"
                    >
                        <span className="text-ffsm-primary font-bold text-sm tracking-wider">{step.number}</span>
                        <span className="text-ffsm-ink font-semibold text-sm sm:text-base tracking-wide whitespace-nowrap">
                            {step.label}
                        </span>
                    </motion.div>

                    {index < steps.length - 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                            className="text-ffsm-primary-soft-strong hidden sm:block"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
