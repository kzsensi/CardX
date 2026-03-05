"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function GateOverlay() {
    const { scrollYProgress } = useScroll();

    // Trigger much earlier, as the man starts turning and walking towards the gate
    // Assuming Video 3 starts feeling "active" around 55% to 65% scroll
    const containerOpacity = useTransform(scrollYProgress, [0.50, 0.55, 0.82, 0.85], [0, 1, 1, 0]);

    // Mask reveals for lines, staggered earlier and faster
    const line1Y = useTransform(scrollYProgress, [0.55, 0.58], ["100%", "0%"]);
    const line2Y = useTransform(scrollYProgress, [0.58, 0.61], ["100%", "0%"]);
    const line3Y = useTransform(scrollYProgress, [0.61, 0.64], ["100%", "0%"]);

    return (
        <motion.div
            className="absolute inset-x-0 top-0 pt-32 pr-24 z-50 pointer-events-none flex flex-col items-end"
            style={{ opacity: containerOpacity }}
        >
            <div className="flex flex-col items-start w-fit">
                <div className="overflow-hidden">
                    <motion.h2
                        className="text-4xl md:text-7xl font-black tracking-tighter text-black uppercase"
                        style={{ y: line1Y }}
                    >
                        NO TAP
                    </motion.h2>
                </div>
                <div className="overflow-hidden">
                    <motion.h2
                        className="text-4xl md:text-7xl font-black tracking-tighter text-black/80 uppercase"
                        style={{ y: line2Y }}
                    >
                        NO SCAN
                    </motion.h2>
                </div>
                <div className="overflow-hidden mt-2">
                    <motion.h2
                        className="text-4xl md:text-7xl font-black tracking-tighter text-[#2B6CFF] uppercase"
                        style={{ y: line3Y }}
                    >
                        JUST WALK IN
                    </motion.h2>
                </div>
            </div>
        </motion.div>
    );
}
