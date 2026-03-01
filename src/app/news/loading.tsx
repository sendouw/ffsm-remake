import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-screen bg-ffsm-surface pt-32 pb-24 lg:pt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="mb-12 text-center animate-pulse">
                        <div className="h-10 w-3/4 mx-auto bg-ffsm-border/50 rounded-sm mb-4"></div>
                        <div className="h-4 w-1/2 mx-auto bg-ffsm-border/50 rounded-sm mb-2"></div>
                        <div className="h-4 w-2/3 mx-auto bg-ffsm-border/50 rounded-sm"></div>
                    </div>

                    <div className="space-y-8 lg:space-y-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col gap-6 sm:flex-row animate-pulse bg-white p-6 rounded-sm border border-ffsm-border">
                                <div className="hidden sm:block sm:w-1/3 aspect-[4/3] bg-ffsm-surface rounded-sm"></div>
                                <div className="flex flex-1 flex-col justify-center space-y-4">
                                    <div className="h-4 w-24 bg-ffsm-surface rounded-sm"></div>
                                    <div className="h-6 w-3/4 bg-ffsm-border/50 rounded-sm"></div>
                                    <div className="h-4 w-full bg-ffsm-surface rounded-sm hidden sm:block"></div>
                                    <div className="h-4 w-5/6 bg-ffsm-surface rounded-sm hidden sm:block"></div>
                                    <div className="h-4 w-1/4 bg-ffsm-border/50 rounded-sm mt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-ffsm-primary-soft" />
                    </div>
                </div>
            </div>
        </div>
    )
}
