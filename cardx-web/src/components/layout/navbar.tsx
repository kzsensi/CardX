"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <div className="font-bold text-xl tracking-tight text-white/90">
                    CardX
                </div>

                {/* Center Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
                    <a href="#overview" className="hover:text-white transition-colors">Overview</a>
                    <a href="#technology" className="hover:text-white transition-colors">Technology</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                    <a href="#security" className="hover:text-white transition-colors">Security</a>
                    <a href="#specs" className="hover:text-white transition-colors">Specs</a>
                </nav>

                {/* CTA */}
                <div>
                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-colors">
                        Get CardX
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
