"use client";

import { motion } from "framer-motion";

export function FeatureScroll() {
    const features = [
        {
            id: "01",
            title: "Walk-Through Detection",
            description: "Students simply walk through the gate while wearing their ID card. No scanning required."
        },
        {
            id: "02",
            title: "Instant Attendance Logging",
            description: "The system reads RFID tags automatically and records attendance in real time. The entire process takes less than one second per student."
        },
        {
            id: "03",
            title: "Parent Notifications",
            description: "Parents receive instant alerts (SMS or WhatsApp) when their child enters the campus."
        },
        {
            id: "04",
            title: "Smart Analytics",
            description: "School administrators access attendance insights, entry logs, and analytics through a web dashboard."
        },
        {
            id: "05",
            title: "Campus Security",
            description: "Live student tracking records entry and exit events for better monitoring, eliminating attendance fraud and proxying."
        },
        {
            id: "06",
            title: "Scalable Platform",
            description: "Operates on a SaaS model scalable across multiple schools with robust anomaly detection."
        }
    ];

    return (
        <section className="relative w-full bg-[#0A0A0C] text-white z-30">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row relative">

                {/* Left Side Scrolling Content */}
                <div className="w-full lg:w-1/2 py-32 lg:py-48 flex flex-col gap-32">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20% 0px -20% 0px", once: false }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-4"
                        >
                            <span className="text-sm font-bold text-[#2B6CFF] tracking-widest">{feature.id}</span>
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90">{feature.title}</h3>
                            <p className="text-xl text-white/60 leading-relaxed max-w-md">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side Sticky Visual */}
                <div className="hidden lg:block w-1/2 static lg:relative">
                    <div className="sticky top-0 h-screen flex items-center justify-center">
                        {/* Visual representation container (Gate Diagram / Abstract Visual) */}
                        <div className="w-[30rem] h-[30rem] rounded-full border border-white/10 relative flex items-center justify-center bg-black/50 backdrop-blur-3xl shadow-2xl">
                            {/* Inner glowing rings */}
                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(43,108,255,0.15)_0%,transparent_70%)]" />
                            <div className="w-[20rem] h-[20rem] rounded-full border border-white/10 animate-[pulse_4s_ease-in-out_infinite] shadow-[0_0_30px_rgba(0,214,255,0.1)]" />
                            <div className="absolute w-[10rem] h-[10rem] rounded-full border border-[#00D6FF]/40 blur-sm animate-[spin_10s_linear_infinite]" />
                            <div className="text-white/60 font-bold tracking-widest uppercase text-sm">System Active</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
