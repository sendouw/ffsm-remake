import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-screen bg-ffsm-surface pt-32 pb-24 lg:pt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="mb-12 text-center flex flex-col items-center animate-pulse">
                        <div className="mb-4 h-6 w-32 rounded-sm bg-ffsm-primary-soft/50"></div>
                        <div className="h-10 w-3/4 bg-ffsm-border/50 rounded-sm mb-4"></div>
                        <div className="h-4 w-2/3 bg-ffsm-border/50 rounded-sm"></div>
                    </div>

                    <div className="space-y-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex flex-col gap-6 lg:flex-row animate-pulse bg-white p-6 rounded-sm shadow-sm border border-ffsm-border">
                                <div className="w-full lg:w-48 xl:w-64 shrink-0 bg-ffsm-surface rounded-sm aspect-video lg:aspect-square"></div>
                                <div className="flex flex-1 flex-col py-2 justify-between space-y-4">
                                    <div className="space-y-4">
                                        <div className="flex gap-2">
                                            <div className="h-5 w-24 bg-ffsm-primary-soft/30 rounded-sm"></div>
                                            <div className="h-5 w-32 bg-ffsm-surface rounded-sm"></div>
                                        </div>
                                        <div className="h-8 w-full bg-ffsm-border/50 rounded-sm"></div>
                                        <div className="h-4 w-3/4 bg-ffsm-surface rounded-sm"></div>
                                    </div>
                                    <div className="h-8 w-3/4 bg-ffsm-surface rounded-sm"></div>
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
